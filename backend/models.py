from sqlalchemy import Column, Integer, String
from database import Base

class Aluno(Base):
    __tablename__ = "alunos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    dataNascimento = Column(String, nullable=True)
    responsavel = Column(String, nullable=False)
    telefone = Column(String, nullable=False)
    endereco = Column(String, nullable=True)
    serie = Column(String, nullable=True)
    rota = Column(String, nullable=True)
    status = Column(String, default="Ativo")