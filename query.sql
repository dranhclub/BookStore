create database if not exists bookstore;

use bookstore;
drop table if exists users;
create table users(
	email varchar(30) primary key,
    password varchar(30) not null
);

insert into users values('example@gmail.com', '123abc');

drop table if exists products;
create table products(
    id int primary key,
    title varchar(100) not null,
    price float not null,
    description text
);
insert into products values
(
	1, 
	'A Little Life',
	16.52,
	'The million copy bestseller, A Little Life by Hanya Yanagihara, is an immensely powerful and heartbreaking novel of brotherly love and the limits of human endurance.\n\nWhen four graduates from a small Massachusetts college move to New York to make their way, they\'re broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their centre of gravity. Over the decades, their relationships deepen and darken, tinged by addiction, success, and pride. Yet their greatest challenge, each comes to realize, is Jude himself, by midlife a terrifyingly talented litigator yet an increasingly broken man, his mind and body scarred by an unspeakable childhood, and haunted by what he fears is a degree of trauma that he\'ll not only be unable to overcome – but that will define his life forever. (Amazon)'
),
(
	2,
	'Becoming',
	21.74,
	'In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America – the first African-American to serve in that role – she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.\n\nIn her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her – from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world\'s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it – in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations – and whose story inspires us to do the same. (Amazon)'
),
(
	3,
    'How to be an adult in relationships',
    13.04,
    '“Most people think of love as a feeling,” says David Richo, “but love is not so much a feeling as a way of being present.” In this book, Richo offers a fresh perspective on love and relationships–one that focuses not on finding an ideal mate, but on becoming a more loving and realistic person. Drawing on the Buddhist concept of mindfulness, How to Be an Adult in Relationships explores five hallmarks of mindful loving and how they play a key role in our relationships throughout life:\n1. Attention to the present moment; observing, listening, and noticing all the feelings at play in our relationships.\n2. Acceptance of ourselves and others just as we are.\n3. Appreciation of all our gifts, our limits, our longings, and our poignant human predicament.\n4. Affection shown through holding and touching in respectful ways.\n5. Allowing life and love to be just as they are, with all their ecstasy and ache, without trying to take control.\n\nWhen deeply understood and applied, these five simple concepts–what Richo calls the five A\'s–form the basis of mature love. They help us to move away from judgment, fear, and blame to a position of openness, compassion, and realism about life and relationships. By giving and receiving these five A\'s, relationships become deeper and more meaningful, and they become a ground for personal transformation. (Amazon)'
),
(
	4,
    'Honey & Co. at Home: Middle Eastern recipes from our kitchen',
    33.04,
    'Brought to you by the award-winning chefs behind the Honey & Co. empire, this book presents simple and delicious Middle Eastern dishes that are easy to make, and a pleasure to serve.\n\n“Just the sort of food I want to eat: welcoming, abundant, and with as much heart as flavor.” — Nigella Lawson\n\nFrom breads to bakes, salads to sweets, there is something for everyone in this celebration of Middle Eastern cooking. Wholesome, fresh, and seasonal ingredients are organized into chapters For Us Two, For Friends, For the Weekend, For a Crowd, and For the Kitchen. Enjoy authentic recipes like Jerusalem sesame bread filled with harissa and lemon chicken, tuck into a crisp salad with saffron-poached pears with walnut tahini, or delight in a fish pastille, among many more.\n\nThe mouthwatering recipes are quick and simple to make. Whip them up for lunch or a weekend meal\nwithout forward planning, special ingredients, or fancy equipment–these will quickly become staple recipes that you will revisit again, and again.\n\nPacked full of stylish photography, this book takes Sarit and Itamar out of the restaurant kitchen and into their home. The recipes and surrounding stories are written from the heart with affection for the food they love. (Amazon)'
),
(
	5,
    'History of Art for Young People',
    32.6,
    'For 40 years this widely praised work has remained unsurpassed as an introduction to art in the Western world. And now-with a more contemporary, more colorful design and with 30 percent more color illustrations than in previous editions-this newest update of the Janson classic is an enticing volume. The book features improved sections on ancient art, modern architecture, Mannerism, and Romanticism. Revised material on the late Renaissance reassesses the religious paintings of Rosso, Pontormo, Savoldo, Correggio, and Tintoretto. A primer section features an introduction to basic terminology and concepts of art history.\n\nWith the matchless credibility of the Janson name, this convenient-to-use reference will inform, enlighten, and enrich the entire family. (Amazon)'
), 
(
	6,
    'The Collected Schizophrenias: Essays',
    21.73,
    'Powerful, affecting essays on mental illness, winner of the Graywolf Press Nonfiction Prize and a Whiting Award\n\nAn intimate, moving book written with the immediacy and directness of one who still struggles with the effects of mental and chronic illness, The Collected Schizophrenias cuts right to the core. Schizophrenia is not a single unifying diagnosis, and Esmé Weijun Wang writes not just to her fellow members of the “collected schizophrenias” but to those who wish to understand it as well. Opening with the journey toward her diagnosis of schizoaffective disorder, Wang discusses the medical community’s own disagreement about labels and procedures for diagnosing those with mental illness, and then follows an arc that examines the manifestations of schizophrenia in her life. In essays that range from using fashion to present as high-functioning to the depths of a rare form of psychosis, and from the failures of the higher education system and the dangers of institutionalization to the complexity of compounding factors such as PTSD and Lyme disease, Wang’s analytical eye, honed as a former lab researcher at Stanford, allows her to balance research with personal narrative. An essay collection of undeniable power, The Collected Schizophrenias dispels misconceptions and provides insight into a condition long misunderstood. (Amazon)'
),
(
	7,
    'Inspired: How to Create Tech Products Customers Love',
    23.91,
    'How do today\'s most successful tech companies–Amazon, Google, Facebook, Netflix, Tesla–design, develop, and deploy the products that have earned the love of literally billions of people around the world? Perhaps surprisingly, they do it very differently than the vast majority of tech companies. In INSPIRED, technology product management thought leader Marty Cagan provides readers with a master class in how to structure and staff a vibrant and successful product organization, and how to discover and deliver technology products that your customers will love–and that will work for your business. With sections on assembling the right people and skillsets, discovering the right product, embracing an effective yet lightweight process, and creating a strong product culture, readers can take the information they learn and immediately leverage it within their own organizations–dramatically improving their own product efforts. Whether you\'re an early stage startup working to get to product/market fit, or a growth-stage company working to scale your product organization, or a large, long-established company trying to regain your ability to consistently deliver new value for your customers, INSPIRED will take you and your product organization to a new level of customer engagement, consistent innovation, and business success. Filled with the author\'s own personal stories–and profiles of some of today\'s most-successful product managers and technology-powered product companies, including Adobe, Apple, BBC, Google, Microsoft, and Netflix–INSPIRED will show you how to turn up the dial of your own product efforts, creating technology products your customers love. The first edition of INSPIRED, published ten years ago, established itself as the primary reference for technology product managers, and can be found on the shelves of nearly every successful technology product company worldwide. This thoroughly updated second edition shares the same objective of being the most valuable resource for technology product managers, yet it is completely new–sharing the latest practices and techniques of today\'s most-successful tech product companies, and the men and women behind every great product. (Amazon)'
),
(
    8,
    'AI Superpowers: China, Silicon Valley, and the New World Order',
    23.47,
    'THE NEW YORK TIMES, USA TODAY, AND WALL STREET JOURNAL BESTSELLER\n\nDr. Kai-Fu Lee—one of the world’s most respected experts on AI and China—reveals that China has suddenly caught up to the US at an astonishingly rapid and unexpected pace.\n\nIn AI Superpowers, Kai-fu Lee argues powerfully that because of these unprecedented developments in AI, dramatic changes will be happening much sooner than many of us expected. Indeed, as the US-Sino AI competition begins to heat up, Lee urges the US and China to both accept and to embrace the great responsibilities that come with significant technological power. Most experts already say that AI will have a devastating impact on blue-collar jobs. But Lee predicts that Chinese and American AI will have a strong impact on white-collar jobs as well. Is universal basic income the solution? In Lee’s opinion, probably not. But he provides a clear description of which jobs will be affected and how soon, which jobs can be enhanced with AI, and most importantly, how we can provide solutions to some of the most profound changes in human history that are coming soon. (Amazon)'
);

drop table if exists images;
create table images(
    product_id int not null,
    is_cover_img int not null,
    url varchar(100)
);

insert into images values
(1, 1, 'images/books/a-little-life.jpg'),
(2, 1, 'images/books/becoming-cover.jpg'),
(3, 1, 'images/books/how-to-be-an-adult-in-relationships-cover.jpg'),
(3, 0, 'images/books/how-to-be-an-adult-in-relationships-1.jpg'),
(3, 0, 'images/books/how-to-be-an-adult-in-relationships-2.jpg'),
(3, 0, 'images/books/how-to-be-an-adult-in-relationships-3.jpg'),
(3, 0, 'images/books/how-to-be-an-adult-in-relationships-4.jpg'),
(4, 1, 'images/books/at-home-cover.jpg'),
(4, 0, 'images/books/at-home-cover-1.jpg'),
(4, 0, 'images/books/at-home-cover-2.jpg'),
(4, 0, 'images/books/at-home-cover-3.jpg'),
(4, 0, 'images/books/at-home-cover-4.jpg'),
(4, 0, 'images/books/at-home-cover-5.jpg'),
(4, 0, 'images/books/at-home-cover-6.jpg'),
(5, 1, 'images/books/history-of-art-for-young-people-cover.jpg'),
(7, 1, 'images/books/How-to-Create-Tech-Products-Customers-Love-cover.jpg'),
(7, 0, 'images/books/How-to-Create-Tech-Products-Customers-Love-1.jpg'),
(7, 0, 'images/books/How-to-Create-Tech-Products-Customers-Love-2.jpg'),
(7, 0, 'images/books/How-to-Create-Tech-Products-Customers-Love-3.jpg'),
(7, 0, 'images/books/How-to-Create-Tech-Products-Customers-Love-4.jpg'),
(6, 1, 'images/books/the-colleced-schizophrenias-essays.jpg'),
(8, 1, 'images/books/AI-Superpowers-cover.jpg'),
(8, 0, 'images/books/AI-Superpowers-1.jpg'),
(8, 0, 'images/books/AI-Superpowers-2.jpg'),
(8, 0, 'images/books/AI-Superpowers-3.jpg'),
(8, 0, 'images/books/AI-Superpowers-4.jpg');



/******************************************************************/
/************************* ADMIN PAGE *****************************/

drop table if exists admin_users;
create table admin_users(
	email varchar(30) primary key,
    password varchar(30) not null
);

insert into admin_users values('admin@gmail.com', 'admin');