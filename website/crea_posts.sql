DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titolo TEXT,
    info TEXT
);

INSERT INTO posts (titolo, info ) VALUES (
    'lavati le mani',
    'lavati le mani abbestia'
);

INSERT INTO posts (titolo, info ) VALUES (
    'ciuo sapiente',
    'lavati ciuo'
);

INSERT INTO posts (titolo, info ) VALUES (
    'eirot',
    'bestia abbestia'
);