-- Criando e usando o banco de dados do projeto individual
CREATE DATABASE if not exists projeto_individual;
USE projeto_individual;

-- Criando as tabelas necessárias
-- Tabela de usuário
CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL,
username VARCHAR(40) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(50) NOT NULL,
confirmarSenha VARCHAR(50) NOT NULL
);

SELECT * FROM usuario;
select * from votacao;

SELECT usuario.nome, voto.fkJogador, jogador.apelido FROM usuario JOIN votacao voto ON idUsuario = fkUsuario
JOIN jogadores jogador ON idJogador = fkJogador;
-- Tabela de jogadores(as)
CREATE TABLE jogadores (
idJogador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL,
sobrenome VARCHAR(80),
apelido VARCHAR(80) NOT NULL,
clube VARCHAR(45),
nacionalidade CHAR(3) NOT NULL,
categoria CHAR(1) NOT NULL CONSTRAINT chkCategoria CHECK(categoria IN('M', 'F')) COMMENT 'M para catg. masculino, F para catg. feminino',
carreira CHAR(4) NOT NULL CONSTRAINT chkCarreira CHECK(carreira IN('ATIV', 'APOS')) COMMENT 'ATIV para jogador em atividade, APOS para jogador aposentado',
bolasDeOuro INT COMMENT 'Quantidade de bola de ouro que o jogador(a) venceu!'
);

-- Inserindo dados dos jogadores (masculinos)
INSERT INTO jogadores VALUES
-- Jogadores
	(null, 'Lionel', 'Messi', 'Messi', 'Paris Saint-Germain', 'ARG', 'M', 'ATIV', 7),
	(null, 'Neymar', 'da Silva Santos Júnior', 'Neymar Jr.', 'Paris Saint-Germain', 'BRA', 'M', 'ATIV', 0),
    (null, 'Vinicius', 'Júnior', 'Vini Jr.', 'Real Madrid', 'BRA', 'M', 'ATIV', 0),
    (null, 'Erling', 'Haaland', 'Haaland', 'Manchester City', 'NOR', 'M', 'ATIV', 0),
    (null, 'Kylian', 'Mbappé', 'Mbappé', 'Paris Saint-Germain', 'FRA', 'M', 'ATIV', 0),
	(null, 'Kevin', 'De Bruyne', 'De Bruyne', 'Manchester City', 'BEL', 'M', 'ATIV', 0),
    (null, 'Rafael', 'Leão', 'R. Leão', 'AC Milan', 'ITA', 'M', 'ATIV', 0),
	(null, 'Lautaro', 'Martínez', 'Lautaro', 'Internazionale de Milano', 'ARG', 'M', 'ATIV', 0),
	(null, 'Bernardo', 'Silva', 'B. Silva', 'Manchester City', 'POR', 'M', 'ATIV', 0),
    (null, 'Rodrygo', null, 'Rodrygo', 'Real Madrid', 'BRA', 'M', 'ATIV', 0),
	(null, 'Cristiano', 'Ronaldo', 'Cristiano', 'Al-Nassr', 'POR', 'M', 'ATIV', 5),
	
	(null, 'Karim', 'Benzema', 'Benzema', 'Real Madrid', 'FRA', 'M', 'ATIV', 1),
	(null, 'Luka', 'Modric', 'Modric', 'Real Madrid', 'CRO', 'M', 'ATIV', 1),
	(null, 'Robert', 'Lewandowski', 'Lewandowski', 'Manchester City', 'POL', 'M', 'ATIV', 0),
	(null, 'Raphael', 'Veiga', 'Veiga', 'Palmeiras', 'BRA', 'M', 'ATIV', 0);
    
INSERT INTO jogadores VALUES
	-- Jogadores brasileiros aposentados
	(null, 'Edson', 'Arantes', 'Pelé', null, 'BRA', 'M', 'APOS', 7),
	(null, 'Ricardo', 'Izecson', 'Kaká', null, 'BRA', 'M', 'APOS', 1),
	(null, 'Ronaldo', 'Nazário', 'Ronaldo', null, 'BRA', 'M', 'APOS', 2),
	(null, 'Rivaldo', 'Vitor Borba Ferreira', 'Rivaldo', null, 'BRA', 'M', 'APOS', 1),
	(null, 'Ronaldo', 'de Assis', 'Ronaldinho', null, 'BRA', 'M', 'APOS', 1),
    
    -- Jogadores aposentados (não brasileiros)
    (null, 'Michel', 'Platini', 'Platini', null, 'FRA', 'M', 'APOS', 3),
    (null, 'Marco', 'van Basten', 'van Basten', null, 'HOL', 'M', 'APOS', 3),
	(null, 'Johan', 'Cruyff', 'Cruyff', null, 'HOL', 'M', 'APOS', 3),
	(null, 'Franz', 'Beckenbauer', 'Beckenbauer', null, 'ALE', 'M', 'APOS', 2),
    (null, 'Kevin', 'Keegan', 'Keegan', null, 'ING', 'M', 'APOS', 2),
	(null, 'Karl-Heinz', 'Rummenigge', 'Karl-Heinz', null, 'ALE', 'M', 'APOS', 2),
    (null, 'Ruud', 'Gullit', 'Gullit', null, 'HOL', 'M', 'APOS', 2),
    (null, 'Alfredo', 'Di Stéfano', 'Di Stefáno', null, 'ARG', 'M', 'APOS', 2),
    
    (null, 'Allan', 'Simonsen', 'Simonsen', null, 'SUI', 'M', 'APOS', 1),
	(null, 'Paolo', 'Rossi', 'Rossi', null, 'ITA', 'M', 'APOS', 1),
	(null, 'Ihor', 'Belanov', 'Belanov', null, 'UCR', 'M', 'APOS', 1),
	(null, 'Lothar', 'Matthäus', 'Matthäus', null, 'ALE', 'M', 'APOS', 1),
	(null, 'Jean-Pierre', 'Papin', 'Jean-Pierre', null, 'FRA', 'M', 'APOS', 1),
	(null, 'Roberto', 'Baggio', 'Baggio', null, 'ITA', 'M', 'APOS', 1),
	(null, 'Hristo', 'Stoichkov', 'Stoichkov', null, 'BUL', 'M', 'APOS', 1),
	(null, 'George', 'Weah', 'Weah', null, 'LIB', 'M', 'APOS', 1),
	(null, 'Matthias', 'Sammer', 'Sammer', null, 'ALE', 'M', 'APOS', 1),
	(null, 'Zinedine', 'Zidane', 'Zidane', null, 'FRA', 'M', 'APOS', 1),
	(null, 'Luís', 'Figo', 'Figo', null, 'POR', 'M', 'APOS', 1),
	(null, 'Michael', 'Owen', 'Owen', null, 'ING', 'M', 'APOS', 1),
	(null, 'Pavel', 'Nedved', 'Nedved', null, 'TCH', 'M', 'APOS', 1),
	(null, 'Andriy', 'Shevchenko', 'Shevchenko', null, 'UCR', 'M', 'APOS', 1),
	(null, 'Fabio', 'Cannavaro', 'Cannavaro', null, 'ITA', 'M', 'APOS', 1),
	(null, 'Oleh', 'Blokhin', 'Blokhin', null, 'UCR', 'M', 'APOS', 1),
	(null, 'Gerd', 'Muller', 'G. Muller', null, 'ALE', 'M', 'APOS', 1),
	(null, 'Gianni', 'Rivera', 'Rivera', null, 'ITA', 'M', 'APOS', 1),
	(null, 'George', 'Best', 'G. Best', null, 'ING', 'M', 'APOS', 1),
	(null, 'Flórián', 'Albert', 'F. Albert', null, 'HUN', 'M', 'APOS', 1),
	(null, 'Bobby', 'Charlton', 'Charlton', null, 'ING', 'M', 'APOS', 1),
	(null, 'Eusébio', null, 'Eusébio', null, 'POR', 'M', 'APOS', 1),
	(null, 'Denis', 'Law', 'Law', null, 'ESC', 'M', 'APOS', 1),
	(null, 'Lev', 'Yashin', 'Yashin', null, 'CHI', 'M', 'APOS', 1),
	(null, 'Josef', 'Masopust', 'Masopust', null, 'CHE', 'M', 'APOS', 1),
	(null, 'Omar', 'Sívori', 'Sívori', null, 'ARG', 'M', 'APOS', 1),
	(null, 'Luis', 'Suarez', 'Suaréz', null, 'ESP', 'M', 'APOS', 1),
	(null, 'Stanley', 'Matthews', 'Matthews', null, 'ING', 'M', 'APOS', 1);
    
-- Exibindo a soma das bolas de ouro dos jogadores brasileiros
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'BRA';

-- Exibindo a soma das bolas de ouro dos jogadores argentinos
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'ARG';

-- Exibindo a soma das bolas de ouro dos jogadores holandeses
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'HOL';

-- Exibindo a soma das bolas de ouro dos jogadores portugueses
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'POR';

-- Exibindo os jogadores que tenham bolas de ouro que estão em atividade
SELECT apelido, bolasDeOuro FROM jogadores WHERE bolasDeOuro > 0 AND carreira = 'ATIV' ORDER BY bolasDeOuro DESC;

-- Exibindo os jogadores que tenham bolas de ouro que estão aposentados
SELECT apelido, bolasDeOuro FROM jogadores WHERE bolasDeOuro > 0 AND carreira = 'APOS' ORDER BY bolasDeOuro DESC;

-- Teste:
SELECT apelido 'Jogador', bolasDeOuro 'Quantidade de Bolas de Ouro'
FROM jogadores
	WHERE bolasDeOuro > 0
		ORDER BY bolasDeOuro DESC
			LIMIT 9;

SELECT nacionalidade, bolasDeOuro 'Quantidade de Bolas de Ouro'
FROM jogadores
	WHERE bolasDeOuro > 0
		-- GROUP BY 1
			ORDER BY bolasDeOuro DESC
				LIMIT 9;

-- Criando a tabela QUIZ
CREATE TABLE quiz (
idQuiz INT PRIMARY KEY,
dificuldade CHAR(5) NOT NULL CONSTRAINT chkTipoQuiz CHECK(dificuldade IN('INICI', 'INTER', 'EXPER')) COMMENT 'Três tipos de dificuldade do quiz',
descricao VARCHAR(100) NOT NULL,
pontMax INT NOT NULL
);

-- Inserindo apenas 3 únicos dados: Tipos de quizes
INSERT INTO quiz VALUES
	(1, 'INICI', 'Para você que não conhece muito o munda da bola, mas quer um desafio, comece por este.', 50),
	(2, 'INTER', 'Se você já se familiariza com o futebol, conhece os jogadores, tente esse desafio!', 100),
	(3, 'EXPER', 'Se você conhece bem o futebol, experiente um desafio com 15 questões te desejo boa sorte!', 150);

-- Criando a tabela associativa - VOTAÇÃO (Usuario + Jogadores(as))
CREATE TABLE votacao (
idVoto INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkJogador INT,
	FOREIGN KEY (fkJogador) REFERENCES jogadores(idJogador),
dtVoto DATETIME NOT NULL
);

-- Criando a tabela associativa - RESULTADO (Usuario + Quiz)
CREATE TABLE resultado (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkQuiz INT,
	FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
pontuacao INT NOT NULL,
dtResultado DATETIME NOT NULL
);