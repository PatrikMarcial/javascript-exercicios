from flask import Flask,request
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    port=2222,
    database="postgres",
    user="postgres",
    password="postgres"
)

@app.route('/api')
def hello_api():
    
    cursor = conn.cursor()

    # Exemplo de inserção de dados na tabela
    email = "exemplo@email.com"
    nome = "Nome do Cliente"
    assunto = "Assunto da Mensagem"

    # Use o comando INSERT para adicionar os dados à tabela
    cursor.execute("INSERT INTO emails (email, nome, assunto) VALUES (%s, %s, %s)", (email, nome, assunto))

    # Certifique-se de fazer um commit para salvar as alterações no banco de dados
    conn.commit()

    # Feche o cursor e a conexão com o banco de dados
    cursor.close()
    conn.close()
    return {"messsage":'Olá, mundo!'}



if __name__ == '__main__':
    app.run()
