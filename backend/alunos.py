from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Aluno

router = APIRouter(prefix="/alunos", tags=["Alunos"])

Aluno.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def listar_alunos(db: Session = Depends(get_db)):
    return db.query(Aluno).all()

@router.post("/")
def adicionar_aluno(aluno: dict, db: Session = Depends(get_db)):
    novo = Aluno(**aluno)
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo

@router.put("/{id}")
def atualizar_aluno(id: int, aluno: dict, db: Session = Depends(get_db)):
    registro = db.query(Aluno).filter(Aluno.id == id).first()
    if not registro:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    for key, value in aluno.items():
        setattr(registro, key, value)
    db.commit()
    return registro

@router.delete("/{id}")
def deletar_aluno(id: int, db: Session = Depends(get_db)):
    registro = db.query(Aluno).filter(Aluno.id == id).first()
    if not registro:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    db.delete(registro)
    db.commit()
    return {"mensagem": "Aluno excluído com sucesso"}