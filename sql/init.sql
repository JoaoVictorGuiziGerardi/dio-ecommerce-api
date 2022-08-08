CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));

CREATE TABLE IF NOT EXISTS mensagens(
    uuid uuid DEFAULT uuid_generate_v4(),
    autor VARCHAR NOT NULL,
    mensagem VARCHAR NOT NULL,
    dataMensagem DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (uuid)
);

INSERT INTO mensagens (autor, mensagem) VALUES ('Pessoa Teste 1', 'Gostei do site! Parabéns');
INSERT INTO mensagens (autor, mensagem) VALUES ('Pessoa Teste 2', 'Um Sneaker mais legal que o outro!');
INSERT INTO mensagens (autor, mensagem) VALUES ('Pessoa Teste 3', 'Se eu tivesse dinheiro levaria todos!');