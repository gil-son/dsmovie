# Extra - parte 4

## AVISO: a parte 4, é uma implementação de minha autoria e com o intuito de auto desenvolvimento. Não faz mais parte do evento. Caso queira consultar a versão original, acesse <a href="https://github.com/devsuperior/sds-dsmovie">sds-dsmovie</a>


## Objetivos do projeto para esta etapa
- Cria mais opções de linguagens para os títulos dos filmes e site, conforme o usuário selecionar a bandeira correspondente a linguagem
- Backend
  - MovieLanguages
  - MovieLanguageRepository
  - MovieLanguageService
  - MovieLanguageController
  - import.sql
- Fronent
  - Redux
  - Integração da API com as novas linguagens de títulos
  - Refatoramento de alguns componentes
 


## Backend

### Entidade MovieLanguages

- Crie a entidade MovieLanguages 
- Vai conter as novas linguagens dos títulos
- vai fazer uma relação de 1 para 1 com a entidade Movie

```
@Entity
@Table(name = "tb_movie_language")
public class MovieLanguage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titleBrazil;
	private String titleSpanish;
	private String titleJapan;
	

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "movie_id")
    	@JsonBackReference
	private Movie movie;
	
	public MovieLanguage(){}


	public MovieLanguage(Long id, String titleBrazil, String titleSpanish, String titleJapan) {
		this.id = id;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
		this.titleJapan = titleJapan;
	}

	/* Getters & Setters */

}
```

### DTOs MovieLanguageDTO e MoreTitlesLanguagesDTO

- Crie o DTO MovieLanguageDTO que é o DTO correspondente a entidade MovieLaguage

```

public class MovieLanguageDTO {

	private Long id;
	private String titleBrazil;
	private String titleSpanish;
	
	public MovieLanguageDTO() {}

	public MovieLanguageDTO(Long id, String titleBrazil, String titleSpanish) {
		this.id = id;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
	}


	public MovieLanguageDTO(MovieLanguage movieLanguage) {
		id = movieLanguage.getId();
		titleBrazil = movieLanguage.getTitleBrazil();
		titleSpanish = movieLanguage.getTitleSpanish();
	}

	/* Getters & Setters */
}
```

- Crie o DTO MoreTitlesLanguagesDTO que será responsável por conter as propriedades que se encontram nas Movie e MovieLanguage
- A seguir esse DTO será utilizado para um join das duas entidades, entao requer que tenha as suas propriedades

```

public class MoreTitlesLanguagesDTO {

	private Long id;
	private String title;
	private Integer count;
	private String image;
	private Double score;
	private String titleBrazil;
	private String titleSpanish;
	private String titleJapan;
	
	
	public MoreTitlesLanguagesDTO(){}


	public MoreTitlesLanguagesDTO(Long id, String title, Integer count, String image, Double score, String titleBrazil,
			String titleSpanish, String titleJapan) {
		super();
		this.id = id;
		this.title = title;
		this.count = count;
		this.image = image;
		this.score = score;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
		this.titleJapan = titleJapan;
	}
	
	/* Getters & Setters */
}


```


### Repository MovieRepository

- Crie a interface MoreTitlesLanguagesRepository que vai ter um @Query para fazer um join entre a entidade Movie com a MovieLanguage, utilizando as propriedades do MoreTitlesLanguagesDTO que correspondem a junção de Movie com MovieLanguage


```
public interface MoreTitlesLanguagesRepository extends JpaRepository<Movie, Long> {	
	
	@Query("SELECT new com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO(obj.id, obj.title, obj.count, obj.image, obj.score, a.titleBrazil, a.titleSpanish, a.titleJapan) "
			+ "FROM Movie obj JOIN obj.movieLanguage a ON obj.id = a.id")
		
	Page<MoreTitlesLanguagesDTO> findAllPaged(Pageable pageable);
}
```


### Service MoreTitlesLanguagesService

- Crie o Service MoreTitlesLanguagesService

```
@Service
public class MoreTitlesLanguagesService {
	
	private MoreTitlesLanguagesRepository repository;
	
	MoreTitlesLanguagesService(MoreTitlesLanguagesRepository repository) {
		this.repository = repository;
		
	}
	
	
	public Page<MoreTitlesLanguagesDTO> findAll(Pageable pageable){
		Page<MoreTitlesLanguagesDTO> result = repository.findAllPaged(pageable);
		return result;
	}

}
```

### Controller MoreTitlesLanguagesController

- Crie o Service MoreTitlesLanguagesService

```
@RestController
@RequestMapping(value = "/full-movies-titles")
public class MoreTitlesLanguagesController {
	
	@Autowired
	MoreTitlesLanguagesService service;
	
	
	
	@GetMapping
	public Page<MoreTitlesLanguagesDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
}

```

### Atualizar o import.sql

```

INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');

INSERT INTO tb_movie(score, count, title, image) VALUES (4.5, 2, 'The Witcher', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (3.3, 3, 'Venom: Let There Be Carnage', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'The Amazing Spider-Man 2: Rise of Electro: A Ameaça de Electro', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi and the Legend of the Ten Rings ', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Django Unchained', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Titanic', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'The Wolf of Wall Street', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Birds of Prey (And The Fantabulous Emancipation of One Harley Quinn)', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Rogue One: A Star Wars Story', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Star Wars: The Clone Wars', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Star Wars: Episode I - The Phantom Menace', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Ultimate Avengers', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Thor', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Black Swan', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hqh5O4KssfJWI62HGAgrjHXbxhD.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'The Silence of the Lambs', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Fight Club', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZkgoQYus5vegHoetLkCJzb17zJ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'World War Z', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Harry Potter and the Deathly Hallows - Part 1', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vcrgU0KaNj5mKUCIQSUdiQwTE9y.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Harry Potter and the Philosophers Stone', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Alice in Wonderland', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qNdlZgz9yoSJ8f0YxQWfKGPoVV.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Fantastic Beasts and Where to Find Them', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'The Theory of Everything', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kq2MHrRfH6RTfkvyDEmYLmGHE6U.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Boba Fetts Book', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'The Last Duel', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4LrL40XecjGLRpX5I2gzMTUt04l.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Interstellar', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Contact', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFkUPqBuUnbhYbQL8VFpTrAT9za.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Dune', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Aquaman', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2cUsDz4TzFYHrKktT1bKHHQ7Cgm.jpg');


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






INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 3, 4.0);


```


### Testar o endpoint criado

- utilizando o método GET e o endpoint:

```
http://localhost:8080/full-movies-titles?size=12&page=0
```

- é esperado o seguinte json/payload:

```
{
    "content": [
        {
            "id": 1,
            "title": "The Witcher",
            "count": 2,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
            "score": 4.5,
            "titleBrazil": "The Witcher",
            "titleSpanish": "The Witcher",
            "titleJapan": "ウィッチャー"
        },
        {
            "id": 2,
            "title": "Venom: Let There Be Carnage",
            "count": 3,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
            "score": 3.3,
            "titleBrazil": "Venom: Tempo de Carnificina",
            "titleSpanish": "Venom: Que haya un tiempo de ejecución de carnicería",
            "titleJapan": "毒：大虐殺の時"
        },
        {
            "id": 3,
            "title": "The Amazing Spider-Man 2: Rise of Electro: A Ameaça de Electro",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
            "score": 0.0,
            "titleBrazil": "O Espetacular Homem-Aranha 2: A Ascensão do Electro",
            "titleSpanish": "El sorprendente Hombre-Araña 2: La amenaza de Electro",
            "titleJapan": "アメイジングスパイダーマン2：エレクトロの台頭"
        },
        {
            "id": 4,
            "title": "Matrix Resurrections",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
            "score": 0.0,
            "titleBrazil": "Matrix: Resurrections (Ressurreição)",
            "titleSpanish": "Matrix Resurrecciones",
            "titleJapan": "マトリックスレザレクションズ"
        },
        {
            "id": 5,
            "title": "Shang-Chi and the Legend of the Ten Rings ",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
            "score": 0.0,
            "titleBrazil": "Shang-Chi e a Lenda dos Dez Anéis",
            "titleSpanish": "Shang-Chi y la leyenda de los Diez Anillos",
            "titleJapan": "シャンチーとテンリングの伝説"
        },
        {
            "id": 6,
            "title": "Django Unchained",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
            "score": 0.0,
            "titleBrazil": "Django Livre",
            "titleSpanish": "Django Desencadenado",
            "titleJapan": "ジャンゴ繋がれざる者"
        },
        {
            "id": 7,
            "title": "Titanic",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
            "score": 0.0,
            "titleBrazil": "Titanic",
            "titleSpanish": "Titanic",
            "titleJapan": "タイタニック"
        },
        {
            "id": 8,
            "title": "The Wolf of Wall Street",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg",
            "score": 0.0,
            "titleBrazil": "O Lobo de Wall Street",
            "titleSpanish": "El lobo de Wall Street",
            "titleJapan": "ウルフ・オブ・ウォールストリート"
        },
        {
            "id": 9,
            "title": "Birds of Prey (And The Fantabulous Emancipation of One Harley Quinn)",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
            "score": 0.0,
            "titleBrazil": "Aves de Rapina - Arlequina e sua emancipação fantabulosa",
            "titleSpanish": "Aves de presa (y la fantabulosa emancipación de Harley Quinn)",
            "titleJapan": "Birds of Prey ハーレイクインと彼女の素晴らしい解放"
        },
        {
            "id": 10,
            "title": "Rogue One: A Star Wars Story",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
            "score": 0.0,
            "titleBrazil": "Rogue One: Uma História Star Wars",
            "titleSpanish": "Rogue One: Una historia de Star Wars",
            "titleJapan": "ローグワン：スターウォーズストーリー"
        },
        {
            "id": 11,
            "title": "Star Wars: The Clone Wars",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg",
            "score": 0.0,
            "titleBrazil": "Star Wars: A Guerra dos Clones",
            "titleSpanish": "Star Wars: La Guerra de los Clones",
            "titleJapan": "スターウォーズ：クローンウォーズ"
        },
        {
            "id": 12,
            "title": "Star Wars: Episode I - The Phantom Menace",
            "count": 0,
            "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg",
            "score": 0.0,
            "titleBrazil": "Star Wars: Episódio I - A Ameaça Fantasma",
            "titleSpanish": "Star Wars: Episodio I - La amenaza fantasma",
            "titleJapan": "スターウォーズエピソード1-ファントムメナス"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": false
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 12,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 3,
    "totalElements": 29,
    "number": 0,
    "first": true,
    "numberOfElements": 12,
    "size": 12,
    "sort": {
        "empty": true,
        "unsorted": true,
        "sorted": false
    },
    "empty": false
}

```



- **COMMIT: More Languages titles**

### Frontend

## Redux

- Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript, consegue gerenciar o estado de componentes vizinhos e/ou distintos. <a href="https://redux.js.org">Saiba mais</a>

- Vai ser utilizado para gerenciar os estados da linguagens dos títulos
- Conforme houver um clique no botão que corresponde a linguagem, o Redux vai armazernar um novo valor para o componente que busca os títulos da API
- Instalação 

```
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

- Crie dentro da pasta src uma pasta chamada store e crie um arquivo chamado index.jsx
- Dentro de index.jsx inclua o seguinte script para a utilização do redux e o store

```
import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;
```

- Crie dentro da pasta src uma pasta chamada reducers e crie um arquivo chamado index.js
- Dentro de index.jsx inclua o seguinte script para gerenciar e exportar os reducers (nesse caso só há um)

```
import {combineReducers} from 'redux';

function titleReducer( state = "", action){
     switch(action.type){
        case "brazil": return "brazil";  
        case "spanish": return "spanish";  
        case "english": return "english";
        case "japan": return "japan";
        default: return state;
     }
    
}

const reducers = combineReducers({titleReducer});

export default reducers;
```



- **COMMIT: useState, useEffect**

### Passo: Props

Props podem ser entendidas como argumentos do componente React.

https://pt-br.reactjs.org/docs/components-and-props.html

NOTA: em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo `key`.

- **COMMIT: Props**

### Passo: useParams

- **COMMIT: useParams**


### Passo: Mostrar estrelinhas
```js
// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}
```


- **COMMIT: Show score**


### Passo: Pagination

- Controlar botão habilitado/desabilitado
- Trocar página ao clique do botão

```js
const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
}
```

- **COMMIT: Pagination**


### Passo: Salvando score, useNavigate

Função para validar email

```javascript
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
export function validateEmail(email: any) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
```

Objeto de configuração da requisição Axios

```
const config: AxiosRequestConfig = {
	baseURL: BASE_URL,
	method: 'PUT',
	url: '/scores',
	data: {
		email: email,
		movieId: movieId,
		score: score
	}
}
```

- **COMMIT: Save, useNavigate**



## PARABÉNS!

![Parabéns!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)

- Quero muito saber seu feedback
  - O que você está achando da nossa abordagem?
  - Você está conseguindo acompanhar?
  - O que você está achando do evento?
- Participe
  - Comente na página da Semana Spring React
  - Divulgue seu projeto no Linkedin e marque a DevSuperior

