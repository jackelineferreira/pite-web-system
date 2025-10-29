from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

alunos = [
    {"id": 1, "nome": "Ana Silva", "responsavel": "Maria Silva", "telefone": "11999999999", "endereco": "Rua das Flores, 123", "serie": "3A", "rota": "R1", "status": "Ativo"},
    {"id": 2, "nome": "Carlos Souza", "responsavel": "João Souza", "telefone": "11988888888", "endereco": "Av. Central, 45", "serie": "2B", "rota": "R2", "status": "Ativo"},
]

@app.get("/")
def read_root():
    return {"message": "🚀 Backend funcionando com sucesso!"}

@app.get("/alunos")
def listar_alunos():
    return alunos

@app.post("/alunos")
def adicionar_aluno(aluno: dict):
    novo_id = max([a["id"] for a in alunos]) + 1 if alunos else 1
    aluno["id"] = novo_id
    alunos.append(aluno)
    return aluno

@app.put("/alunos/{id}")
def atualizar_aluno(id: int, aluno_atualizado: dict):
    for i, aluno in enumerate(alunos):
        if aluno["id"] == id:
            alunos[i].update(aluno_atualizado)
            return alunos[i]
    raise HTTPException(status_code=404, detail="Aluno não encontrado")

@app.delete("/alunos/{id}")
def excluir_aluno(id: int):
    for i, aluno in enumerate(alunos):
        if aluno["id"] == id:
            return alunos.pop(i)
    raise HTTPException(status_code=404, detail="Aluno não encontrado")