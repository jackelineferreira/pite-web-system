# 🌐 PITE Web System

Sistema web para **gestão de alunos e rotas escolares**, desenvolvido com **React (frontend)** e **FastAPI (backend)**.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- ⚛️ **React**
- 🎨 **TailwindCSS**
- 🔄 **Fetch API** (para comunicação com o backend)

### Backend
- 🐍 **FastAPI**
- 🧠 **Pydantic**
- 💾 **SQLAlchemy**
- ⚙️ **Uvicorn**

---

## 🧩 Estrutura do Projeto

pite-frontend/
│
├── frontend/ # Aplicação React
│ ├── src/
│ │ ├── pages/
│ │ │ ├── GestaoAlunos.jsx
│ │ │ └── ...
│ │ ├── assets/
│ │ └── App.jsx
│ └── package.json
│
└── backend/ # API FastAPI
├── main.py
├── venv/
└── requirements.txt

---

## ⚙️ Como Executar o Projeto

### 🖥️ 1. Clonar o Repositório

```bash
git clone https://github.com/jackelineferreira/pite-web-system.git
cd pite-web-system

🧠 2. Configurar o Backend (FastAPI)
cd backend
python -m venv venv
source venv/Scripts/activate  # no Windows
# ou no Linux/Mac: source venv/bin/activate

pip install fastapi uvicorn sqlalchemy pydantic
uvicorn main:app --reload

📍 O servidor será iniciado em:

http://127.0.0.1:8000

💻 3. Configurar o Frontend (React)

Em outro terminal:
cd frontend
npm install
npm run dev

📍 O app será iniciado em:

http://localhost:5173

📡 Rotas da API (FastAPI)

Método	Rota	           Descrição
GET	      /	            Teste de conexão
GET	      /alunos	    Lista todos os alunos
POST	  /alunos	    Adiciona um novo aluno
PUT	      /alunos/{id}	Atualiza um aluno existente
DELETE	  /alunos/{id}	Remove um aluno

🛠️ Funcionalidades

✅ Cadastro de alunos
✅ Edição e exclusão
✅ Integração com backend FastAPI
✅ Filtros e busca dinâmica
✅ Interface responsiva e moderna

👩‍💻 Autora

Jackeline Ferreira
📧 LinkedIn

💻 GitHub

🧾 Licença

Este projeto é distribuído sob a licença MIT.
Sinta-se à vontade para usar, modificar e contribuir!

