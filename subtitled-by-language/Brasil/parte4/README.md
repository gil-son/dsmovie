＃追加-パート4

## 免責事項：パート4は私自身の実装であり、自己開発を目的としています。 イベントの一部ではなくなりました。 元のバージョンを確認したい場合は、<a href="https://github.com/devsuperior/sds-dsmovie">sds-dsmovie</a>にアクセスしてください。


## このステップのプロジェクト目標
-ユーザーが言語に対応するフラグを選択すると、映画のタイトルとWebサイトの言語オプションが増えます
-バックエンド
   - MovieLanguages
   - MovieLanguageRepository
   - MovieLanguageService
   - MovieLanguageController
   - import.sql
- フロントエンド
   - 戻ってきた
   - 新しいタイトル言語とのAPI統合
   - 一部のコンポーネントのリファクタリング
 


##バックエンド

### MovieLanguagesエンティティ

- MovieLanguagesエンティティを作成します
- 新しいタイトルの言語が含まれます
- Movieエンティティと1対1の関係を作成します

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

### DTOのMovieLanguageDTOおよびMoreTitlesLanguagesDTO

- MovieLaguageエンティティに対応するDTOであるDTOMovieLanguageDTOを作成します

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

- MovieおよびMovieLanguageにあるプロパティを含める役割を担うMoreTitlesLanguagesDTOを作成します
- 次に、このDTOは2つのエンティティの結合に使用されるため、そのプロパティが必要です

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


### リポジトリMovieRepository

- MovieとMovieLanguageのジャンクションに対応するMoreTitlesLanguagesDTOのプロパティを使用して、MovieエンティティをMovieLanguageに結合する@Queryを持つMoreTitlesLanguagesRepositoryインターフェイスを作成します。


```
public interface MoreTitlesLanguagesRepository extends JpaRepository<Movie, Long> {	
	
	@Query("SELECT new com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO(obj.id, obj.title, obj.count, obj.image, obj.score, a.titleBrazil, a.titleSpanish, a.titleJapan) "
			+ "FROM Movie obj JOIN obj.movieLanguage a ON obj.id = a.id")
		
	Page<MoreTitlesLanguagesDTO> findAllPaged(Pageable pageable);
}
```


### サービスMoreTitlesLanguagesService

- MoreTitlesLanguagesServiceサービスを作成します

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

### コントローラーMoreTitlesLanguagesController

- MoreTitlesLanguagesServiceコントローラーを作成します

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

### import.sqlを更新します

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


###作成されたエンドポイントをテストします

- GETメソッドとエンドポイントを使用します。

```
http://localhost:8080/full-movies-titles?size=12&page=0
```

- 次のjson/payloadが必要です。

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

### フロントエンド

### Redux

- Reduxは、JavaScriptアプリケーションの状態を保存するためのライブラリであり、隣接するコンポーネントや個別のコンポーネントの状態を管理します。 <a href="https://redux.js.org">もっと知る</a>

- タイトルの言語の状態を管理するために使用されます
- 言語に対応するボタンをクリックすると、ReduxはAPIタイトルをフェッチするコンポーネントの新しい値を保存します
- インストール

```
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

- srcフォルダー内にstoreというフォルダーを作成し、index.jsxというファイルを作成します
- index.jsxの中には、reduxとストアを使用するための次のスクリプトが含まれています

```
import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;
```

- srcフォルダー内にreducersというフォルダーを作成し、index.jsというファイルを作成します
- index.jsx内には、レデューサーを管理およびエクスポートするための次のスクリプトが含まれています（この場合は1つだけです）

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

- srcフォルダー内およびindex.tsxファイルで、スクリプトを次のように更新します。

```
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```



### 言語に一致する旗の画像を追加する

下の画像をクリックしてダウンロードしてください。

- <a href="https://github.com/gil-son/dsmovie/tree/main/subtitled-by-language/Brasil" ><img  width="5%" src="https://flagicons.lipis.dev/flags/4x3/br.svg" /></a>

- <a href="https://github.com/gil-son/dsmovie/tree/main/subtitled-by-language/English" ><img  width="5%" src="https://flagicons.lipis.dev/flags/4x3/us.svg" /></a>

- <a href="https://github.com/gil-son/dsmovie/tree/main/subtitled-by-language/España" ><img  width="5%" src="https://flagicons.lipis.dev/flags/4x3/es.svg" /></a>

- <a href="https://github.com/gil-son/dsmovie/tree/main/subtitled-by-language/日本" ><img  width="5%" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" /></a>

- src/assets/imgディレクトリにフラグの画像を追加します


### ユーティリティ、ページ、コンポーネントの更新

#### タイプ-movie.ts

- typesフォルダーにアクセスし、movie.tsファイルに次のように残します。

```
export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
    titleBrazil: string;
    titleSpanish: string;
    titleJapan: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

```

- タイプMovieには、APIを受け取るためのより多くのプロパティが含まれていることに注意してください


#### ページ-リスト-index.ts

- pages / Lintingディレクトリにアクセスし、index.tsファイルに次のように残します。

```
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    

    useEffect(() => {
        axios.get(`${BASE_URL}/full-movies-titles?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                console.log(data);
            });
    }, [pageNumber]);
    
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie}/>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;

```
- APIがタイトル言語で使用されていることに注意してください



#### components - Navbar - index.tsx

- componentsフォルダー内で、Navbarフォルダーにアクセスし、index.tsxファイル内で、スクリプトを次のように更新します。

```

import {ReactComponent as GithubIcon} from "assets/img/github.svg"; // tsconfig.json "baseUrl": "./src"
import {ReactComponent as BrazilFlag} from "assets/img/br.svg";
import {ReactComponent as SpanishFlag} from "assets/img/es.svg";
import {ReactComponent as JapanFlag} from "assets/img/jp.svg";
import {ReactComponent as UnitedStatesFlag} from "assets/img/us.svg";
import {useDispatch} from 'react-redux';
import "./styles.css";


function NavBar(){
  
  const dispatch = useDispatch();

  function ClickedBrazil(){
    dispatch( {type: "brazil"});
  }

  function ClickedSpanish(){
    dispatch( {type: "spanish"});
  }

  function ClickedEnglish(){
    dispatch( {type: "english"});
  }

  function ClickedJapan(){
    dispatch( {type: "japan"});
    
  }

    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            
            
            <div className="dsmovie-contact-container-center">
              <div className="dsmovie-flag-container">
                  <BrazilFlag onClick={ClickedBrazil} />
                  ........
                </div>
                <div className="dsmovie-flag-container">
                  <UnitedStatesFlag onClick={ClickedEnglish} />
                  ........
                  
                </div>
                <div className="dsmovie-flag-container">
                  <SpanishFlag onClick={ClickedSpanish} />  
                  ........
                </div>

                <div className="dsmovie-flag-container">
                  <JapanFlag onClick={ClickedJapan} />  
                  ........
                </div>
              </div>
            
              <div className="dsmovie-contact-container">
            <a href="https://github.com/gil-son/dsmovie" target="_blank" rel="noreferrer">
              
                <GithubIcon />
                
              
            </a>
            </div>
          </div>
        </nav>
      </header>
    );
}


export default NavBar;
```

- そしてstyle.cssファイルで


```
header{
    background-color: var(--color-primary);
    height: 60px;
    display: flex;
    align-items: center;
}

.dsmovie-nav-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff
}

.dsmovie-nav-content h1{
    margin: 0;
    font-weight: 700;
    font-size: 24px;
}

.dsmovie-contact-container{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.dsmovie-contact-container-center{
    margin-right: 100px;
    display:flex;
}

.dsmovie-flag-container{
    margin-left: 20px;
    justify-content:flex-end;
    width: 80%;
    height: 26px;
    cursor: pointer;
    
}


.dsmovie-contact-link{
    margin: 0 0 0 10px;
    font-size: 12px;
}
```





#### コンポーネント-MovieScore-index.tsx

- componentsフォルダー内で、MovieScoreフォルダーにアクセスし、index.tsxファイル内で、スクリプトを次のように更新します。

```
import MovieStars from "components/MovieStars";
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import "./styles.css";

// https://pt.stackoverflow.com/questions/347616/problema-com-condicional-no-react

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {

    
    useEffect(() => {
        
        setVerify();
        

    }, []);

    function setVerify(){

    }

    let ss =  {titleReducer: "spanish"};
    let bb =  {titleReducer: "brazil"};
    let ee =  {titleReducer: "english"};
    let jj =  {titleReducer: "japan"};

    const theState = useSelector( function(state){ return state});
    console.log("ee", ee)
    console.log("bb", bb)
    console.log("ss", ss)
    console.log("jj", jj)
    console.log("theState", theState)


    var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
    var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
    var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);
    var verifyJapan = JSON.stringify(jj) === JSON.stringify(theState);

    return (
        <div className="dsmovie-score-container">
             <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
             <MovieStars score={score} />
             
             {count <= 1 && verifyEnglish && <p className="dsmovie-score-count">{count} valuation</p>}
             {count > 1 && verifyEnglish && <p className="dsmovie-score-count">{count} valuations</p>}

             {count <= 1 && verifySpanish && <p className="dsmovie-score-count">{count} evaluación</p>}
             {count > 1 && verifySpanish && <p className="dsmovie-score-count">{count} evaluaciones</p>}

             {count <= 1 && verifyBrazil && <p className="dsmovie-score-count">{count} avaliação</p>}
             {count > 1 && verifyBrazil && <p className="dsmovie-score-count">{count} avaliações</p>}

             {count <= 1 && verifyJapan && <p className="dsmovie-score-count">{count} 評価</p>}
             {count > 1 && verifyJapan && <p className="dsmovie-score-count">{count} 評価</p>}
         </div>
    )
} 

export default MovieScore;

```


#### コンポーネント-MovieCard-index.tsx

- componentsフォルダー内で、MovieCardフォルダー内にアクセスし、index.tsxファイル内で、スクリプトを次のように更新します。

```

import MovieScore from "components/MovieScore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import {useSelector, useDispatch} from 'react-redux';

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        setDispatchJ();
        setDispatchS();
        setDispatchB();
        setDispatchE(); // the last, is the first to appear
        

    }, []);


    function setDispatchB(){
        dispatch({ type: "brazil"});
    }

    function setDispatchS(){
       dispatch({ type: "spanish"});
    }     

    function setDispatchE(){
        dispatch({ type: "english"});
    }

    function setDispatchJ(){
        dispatch({ type: "japan"});
    }

    let ss =  {titleReducer: "spanish"};
    let bb =  {titleReducer: "brazil"};
    let ee =  {titleReducer: "english"};
    let jj =  {titleReducer: "japan"};

   const theState = useSelector( function(state){ return state});


  var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
  var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
  var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);
  var verifyJapan = JSON.stringify(jj) === JSON.stringify(theState);


    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                {verifyEnglish && <h3>{movie.title}</h3>}
                {verifyBrazil && <h3>{movie.titleBrazil}</h3>}
                {verifySpanish && <h3>{movie.titleSpanish}</h3>}
                {verifyJapan && <h3>{movie.titleJapan}</h3>}
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">
                        
                        {verifyEnglish && <>Evaluate</>}
                        {verifyBrazil && <>Avaliar</>}
                        {verifySpanish && <>Para evaluar</>}
                        {verifyJapan && <>評価します</>}
                    
                    </div>
                </Link>
            </div>
        </div>
    )
}



export default MovieCard;

```



#### コンポーネント-FormCard-index.tsx

- componentsフォルダー内で、FormCardフォルダーにアクセスし、index.tsxファイル内で、スクリプトを次のように更新します。

```

 import axios, { AxiosRequestConfig } from 'axios';
 import { useEffect, useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import { Movie } from 'types/movie';
 import { BASE_URL } from 'utils/requests';
 import { validateEmail } from 'utils/validate';
 import {useSelector} from 'react-redux';
 import './styles.css';

 type Props = {
     movieId : string;
 }

 function FormCard( { movieId } : Props) {

     const navigate = useNavigate();

     const [movie, setMovie] = useState<Movie>();

     useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

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

        axios(config).then(response => {
            navigate("/");
        });
    }


        let ss =  {titleReducer: "spanish"};
        let bb =  {titleReducer: "brazil"};
        let ee =  {titleReducer: "english"};
        let jj =  {titleReducer: "japan"};

        const theState = useSelector( function(state){ return state});

        var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
        var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
        var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);
        var verifyJapan = JSON.stringify(jj) === JSON.stringify(theState);

     return (
         <div className="dsmovie-form-container">
             <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
             <div className="dsmovie-card-bottom-container">
                 <h3>
                     {movie?.title}
                 </h3>
                 <form className="dsmovie-form" onSubmit={handleSubmit}>
                     <div className="form-group dsmovie-form-group">
                         <label htmlFor="email">
                             
                             {verifyEnglish && <>Inform your email</>}
                             {verifySpanish && <>informar a su correo electrónico</>}
                             {verifyBrazil && <>Informe o seu email</>}
                             {verifyJapan && <>あなたの電子メールを知らせなさい</>}
                         
                         </label>
                         <input type="email" className="form-control" id="email" />
                     </div>
                     <div className="form-group dsmovie-form-group">
                         <label htmlFor="score">Inform your evaluate</label>
                         <select className="form-control" id="score">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </select>
                     </div>
                     <div className="dsmovie-form-btn-container">
                         <button type="submit" className="btn btn-primary dsmovie-btn">Save</button>
                     </div>
                 </form >
                 <Link to="/">
                     <button className="btn btn-primary dsmovie-btn mt-3">Cancel</button>
                 </Link>
             </div >
         </div >
     );
 }

 export default FormCard;
 
```

- **COMMIT: Concluído**



## とても良い!

![とても良い!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)
