from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Aluno

Base.metadata.create_all(bind=engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



@app.get("/alunos")
def listar_alunos(db: Session = Depends(get_db)):
    return db.query(Aluno).all()

@app.post("/alunos")
def adicionar_aluno(aluno: dict, db: Session = Depends(get_db)):
    novo = Aluno(**aluno)
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo

@app.put("/alunos/{aluno_id}")
def editar_aluno(aluno_id: int, dados: dict, db: Session = Depends(get_db)):
    aluno = db.query(Aluno).filter(Aluno.id == aluno_id).first()
    if not aluno:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    for key, value in dados.items():
        setattr(aluno, key, value)
    db.commit()
    db.refresh(aluno)
    return aluno

@app.delete("/alunos/{aluno_id}")
def excluir_aluno(aluno_id: int, db: Session = Depends(get_db)):
    aluno = db.query(Aluno).filter(Aluno.id == aluno_id).first()
    if not aluno:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    db.delete(aluno)
    db.commit()
    return {"mensagem": "Aluno excluído com sucesso"}