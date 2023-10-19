-- Criando e usando o banco de dados do projeto individual
CREATE DATABASE if not exists ballonDor;
USE ballonDor;

-- Criando as tabelas necessárias
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

-- Tabela de usuário
CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(40) NOT NULL,
email VARCHAR(100) NOT NULL,
posicao VARCHAR(16) NOT NULL,
senha VARCHAR(50) NOT NULL,
fkJogador INT,
	FOREIGN KEY (fkJogador) REFERENCES jogadores(idJogador)
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
	(null, 'Raphael', 'Veiga', 'Veiga', 'Palmeiras', 'BRA', 'M', 'ATIV', 0),
	(null, 'Marta', 'Silva', 'Marta', 'Orlando Pride', 'BRA', 'F', 'ATIV', 5);
    
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

-- Adicionando usuários para POPULAR a tabela
-- Se você deu GIT CLONE e quiser criar seu banco de dados, utilize esse comando para popular:
-- OBS: O deploy deste programa não contém essas contas criadas, não tente logar em alguma conta com esses login
INSERT INTO usuario VALUES
	(null, 'Lucas', 'lucas@sptech.school', 'Ponta-Esquerda', '#neymarjr123', 2),
	(null, 'Ester', 'ester@gmail.com', 'Meio-Campista', '#loveLusca', 1),
	(null, 'GustavoPrado', 'g.prado@gmail.com', 'Ponta-Direita', '#marinavolta', 4),
	(null, 'Dwuzin', 'eduramayr@gmail.com', 'Volante', '#Dwuzinn', 3),
	(null, 'Pedro', 'pedro.oliveira@sptech.school', 'Meio-Campista', '#algoritmos123', 3),
	(null, 'Marccelo', 'marccelo@sptech.school', 'Zagueiro', '#div_quadrado', 4),
	(null, 'Jhonny', 'jhonny@gmail.com', 'Zagueiro', '#bodybuilder', 1),
	(null, 'Noir', 'noa.miglio@sptech.school', 'Lateral-Direito', '#airaNoSpotify', 5),
	(null, 'Mazzoni', 'murilo.mazzoni@sptech.school', 'Atacante', '#megatronFut', 3),
	(null, 'enzin', 'enzo@gmail.com', 'Atacante', '2207enzo', 4),
	(null, 'nicolau', 'nicolau@gmail.com', 'Volante', '12345678', 10),
	(null, 'Vinicius-23', 'vinicius@gmail.com', 'Meio-Campista', '87654321', 3),
	(null, 'NayNay', 'nayra.belarmino@sptech.school', 'Atacante', '12345678', 7),
	(null, 'EleRiu', 'gustavotorres@gmail.com', 'Atacante', '12345678', 6),
	(null, 'Duartizin_', 'joaosilvaduartevictor@gmail.com', 'Zagueiro', '#minecraft2', 8),
	(null, 'Juhrsin', 'juhrsin@gmail.com', 'Atacante', '290105juhrs', 1),
	(null, 'g0mesz_', 'caiquegomes@gmail.com', 'Lateral-Esquerdo', '12345678', 3),
	(null, 'Joninhas', 'jonas@gmail.com', 'Volante', '#majoninhas', 4),
	(null, 'Dyelzin', 'adyel@gmail.com', 'Ponta-Esquerda', '#vivaamusica', 2),
	(null, 'Vini012', 'viniciusprod@gmail.com', 'Atacante', '#prodonstudio', 1),
	(null, 'RE$ENDE', 'resende@gmail.com', 'Volante', '#sevenrecords', 3),
	(null, 'Guto', 'shinayderguto@gmail.com', 'Goleiro', '#goooooool', 4),
	(null, 'jotinha', 'jota@gmail.com', 'Goleiro', '#vamosJogar', 3),
	(null, 'rafazerakk', 'rafinhas@gmail.com', 'Zagueiro', '#editarehbom', 2),
	(null, 'Kath', 'katherinne@gmail.com', 'Ponta-Direita', '#1234567', 1),
	(null, 'Abraao', 'abraaozin@gmail.com', 'Lateral-Direito', '#29anosnaoeh30', 2),
	(null, 'Hengler', 'henglxr@gmail.com', 'Atacante', '12345678', 2),
	(null, 'juliarufino', 'juliarufino@hotmail.com', 'Atacante', '#cuphead123', 3),
	(null, 'jaum', 'jaumdacarol@gmail.com', 'Meio-Campista', '#coraline', 3),
	(null, 'CoraLine', 'lineedits@gmail.com', 'Volante', '#lineEditions', 2),
	(null, 'Theus', 'theus@gmail.com', 'Ponta-Esquerda', '#minecraft', 1),
	(null, 'Garrafinha', 'ga_rafinha@gmail.com', 'Zagueiro', '#garrafinha', 9),
	(null, 'icaro', 'icarai@gmail.com', 'Atacante', '#omelhordomundo', 11);
	
-- Criando a tabela QUIZ
CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
pontuacao INT,
dtJogo DATETIME,
fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

-- Criando a tabela associativa - VOTAÇÃO (Usuario + Jogadores(as))
-- CREATE TABLE votacao (
-- idVoto INT PRIMARY KEY AUTO_INCREMENT,
-- fkUsuario INT,
-- 	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
-- fkJogador INT,
-- 	FOREIGN KEY (fkJogador) REFERENCES jogadores(idJogador),
-- dtVoto DATETIME NOT NULL
-- );

-- Criando a tabela associativa - RESULTADO (Usuario + Quiz)
-- CREATE TABLE resultado (
-- idResultado INT PRIMARY KEY AUTO_INCREMENT,
-- fkUsuario INT,
-- 	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
-- fkQuiz INT,
-- 	FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
-- pontuacao INT NOT NULL,
-- dtResultado DATETIME NOT NULL
-- );


-- SELECTS:


-- Pegando a quantidade de votos (ANTIGO)
-- SELECT count(votacao.fkJogador) as Votos, jogadores.apelido as Jogador FROM VOTACAO
-- 	JOIN jogadores ON jogadores.idJogador = votacao.fkJogador
-- 		GROUP BY votacao.fkJogador ORDER BY Votos DESC LIMIT 9;

-- SELECT * FROM VOTACAO;

-- Pegando a quantidade de votos (NOVO)
SELECT count(usuario.fkJogador) as Votos, jogadores.apelido as Jogador FROM usuario
	JOIN jogadores ON jogadores.idJogador = usuario.fkJogador
		GROUP BY usuario.fkJogador ORDER BY Votos DESC LIMIT 9;

-- Exibindo a soma das bolas de ouro dos jogadores brasileiros
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'BRA';

-- Exibindo a soma das bolas de ouro dos jogadores argentinos
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'ARG';

-- Exibindo a soma das bolas de ouro dos jogadores holandeses
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'HOL';

-- Exibindo a soma das bolas de ouro dos jogadores portugueses
SELECT SUM(bolasDeOuro) FROM jogadores WHERE nacionalidade = 'POR';

-- Exibindo os jogadores que tenham bolas de ouro que estão em atividade
SELECT apelido, bolasDeOuro FROM jogadores WHERE bolasDeOuro > 0 AND carreira = 'ATIV'
	ORDER BY bolasDeOuro DESC;

-- Exibindo os jogadores que tenham bolas de ouro que estão aposentados
SELECT apelido, bolasDeOuro FROM jogadores WHERE bolasDeOuro > 0 AND carreira = 'APOS'
	ORDER BY bolasDeOuro DESC;

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

-- Pegando a soma de pontuações de um usuário específico
SELECT SUM(pontuacao) FROM quiz WHERE fkUsuario = 1;

-- Pegando a soma de pontuações de cada usuário
SELECT SUM(quiz.pontuacao) as Pontos, usuario.username as Membro FROM quiz
	JOIN usuario ON usuario.idUsuario = quiz.fkUsuario GROUP BY quiz.fkUsuario
		ORDER BY Pontos DESC LIMIT 8;