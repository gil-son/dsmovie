create table tb_movie (id int8 generated by default as identity, count int4, image varchar(255), score float8, title varchar(255), primary key (id));
create table tb_score (value float8, movie_id int8 not null, user_id int8 not null, primary key (movie_id, user_id));
create table tb_user (id int8 generated by default as identity, email varchar(255), primary key (id));


alter table if exists tb_score add constraint FK23yhb6qop0f6hnb72hcorm3cv foreign key (movie_id) references tb_movie;
alter table if exists tb_score add constraint FKl8lgmbrjoav0thqqtqx6vrr4k foreign key (user_id) references tb_user;

INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');


INSERT INTO tb_movie(score, count, title, image) VALUES (4.5, 2, 'The Witcher', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (3.3, 3, 'Venom: Let There Be Carnage', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 3, 4.0);


create table tb_movie_language (id int8 generated by default as identity, title_brazil varchar(255), title_japan varchar(255), title_spanish varchar(255), movie_id int8, primary key (id));

alter table if exists tb_movie_language add constraint FK7jdmumuls0kmwt7l6p5vtnyrt foreign key (movie_id) references tb_movie;


INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('The Witcher', 'The Witcher', 'ウィッチャー', 1);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Venom: Tempo de Carnificina', 'Venom: Que haya un tiempo de ejecución de carnicería', '毒：大虐殺の時', 2);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('O Espetacular Homem-Aranha 2: A Ascensão do Electro', 'El sorprendente Hombre-Araña 2: La amenaza de Electro', 'アメイジングスパイダーマン2：エレクトロの台頭', 3);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Matrix: Resurrections (Ressurreição)', 'Matrix Resurrecciones', 'マトリックスレザレクションズ', 4);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Shang-Chi e a Lenda dos Dez Anéis', 'Shang-Chi y la leyenda de los Diez Anillos', 'シャンチーとテンリングの伝説', 5);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Django Livre', 'Django Desencadenado', 'ジャンゴ繋がれざる者', 6);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Titanic', 'Titanic', 'タイタニック', 7);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('O Lobo de Wall Street', 'El lobo de Wall Street', 'ウルフ・オブ・ウォールストリート', 8);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Aves de Rapina - Arlequina e sua emancipação fantabulosa', 'Aves de presa (y la fantabulosa emancipación de Harley Quinn)', 'Birds of Prey ハーレイクインと彼女の素晴らしい解放', 9);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Rogue One: Uma História Star Wars', 'Rogue One: Una historia de Star Wars', 'ローグワン：スターウォーズストーリー', 10);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Star Wars: A Guerra dos Clones', 'Star Wars: La Guerra de los Clones', 'スターウォーズ：クローンウォーズ', 11);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Star Wars: Episódio I - A Ameaça Fantasma', 'Star Wars: Episodio I - La amenaza fantasma', 'スターウォーズエピソード1-ファントムメナス', 12);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Vingadores: Ultimato', 'Vingadores: Ultimato', 'アベンジャーズ：エンドゲーム', 13);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Thor', 'Thor', 'ソー', 14);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Cisne Negro', 'Cisne negro', '黒い白鳥', 15);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('O Silêncio dos Inocentes', 'El silencio de los corderos', '羊たちの沈黙', 16);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Clube da Luta', 'El club de la lucha', 'ファイトクラブ', 17);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Guerra Mundial Z', 'Guerra Mundial Z', '第二次世界大戦', 18);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Harry Potter e as Relíquias da Morte - Parte 1', 'Harry Potter y las Reliquias de la Muerte - Parte 1', 'ハリーポッターと死の秘宝-パート1', 19);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Harry Potter e a Pedra Filosofal', 'Harry Potter y la Piedra Filosofal', 'ハリーポッターと賢者の石', 20);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Alice no Pais das Maravilhas', 'Alicia en el país de las Maravillas', '不思議の国のアリス', 21);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Animais Fantásticos e Onde Habitam', 'Animales fantásticos y dónde encontrarlos', 'ファンタスティック・ビーストと魔法使いの旅', 22);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('A teoria de tudo', 'La teoría del todo', 'すべての理論', 23);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('O Livro de Boba Fett', 'El libro de Boba Fett', 'ボバ・フェットの本', 24);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('O Último Duelo', 'El Último Duelo', '最後の決闘', 25);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Interestelar', 'Interestelar', '星間', 26);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Contato', 'Contact (Película)', 'お問い合わせ（映画）', 27);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Duna', 'Duna', '砂丘', 28);
INSERT INTO tb_movie_language(title_brazil, title_spanish, title_japan, movie_id) VALUES ('Aquaman', 'Aquaman', 'アクアマン', 29);
