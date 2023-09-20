import React, { useState, createContext } from "react";
// import Home from '../../Routes/Home/index'

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    
    
    {id:1, 
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:'Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.', 
     
      img: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/05/maxresdefault-e1683589706478.jpg?resize=1200%2C390&ssl=1", 
      date:' 02/17/2023 ',
      
      title:"OPPENHEIMER OFFICIAL NEW TRAILER", 
      description: " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp', but here she's excellent from beginning to end. Elsewhere, Jonathan Majors is brilliant - great to see that guy all over the place recently. Paul Rudd remains a strong lead, while the likes of Michael Douglas and Kathryn Newton are positives too.\n\nLove the Quantum Realm setting. I'm nothing like an MCU nut, I'm only aware of the films, so didn't know what to expect, but the place looks fantastic - from the environment to the creatures; shoutout Veb. Like Pfeiffer, Corey Stoll didn't really register on my radar in prior films, but him as M.O.D.O.K. is a lot of fun.\n\nLooking at my personal MCU ranking, this goes in at no. 8 - I didn't anticipate that! A literal quick glance at the average rating on here suggests I'm in the minority but I truly found much enjoyment from this. Quite the improvement on Ant-Man 2, which is at the bottom of my aforementioned ranking."
    
  }, 
  {id:2, 
    ide: 2,
      cat: "Hollywood",
      sp: "home-banner",
      for: "ArticleList",
      date:' 03/24/2023',
      title:"SPIDER MAN  2",
      img2: "https://external-preview.redd.it/marvels-spider-man-2-prequel-comic-announced-for-free-comic-v0-5ccD8pgNeY8GxUMpybyeIDToOLIZ5m8klESCOGkyuII.jpg?width=640&crop=smart&auto=webp&s=32290fa7a8680a53887fd06bb2b69e291cf653c2",
      img: "https://external-preview.redd.it/marvels-spider-man-2-prequel-comic-announced-for-free-comic-v0-5ccD8pgNeY8GxUMpybyeIDToOLIZ5m8klESCOGkyuII.jpg?width=640&crop=smart&auto=webp&s=32290fa7a8680a53887fd06bb2b69e291cf653c2",
      Overview: 'With the price on his head ever increasing, Spiderman uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      description: " Taking place sometime after the events of The Amazing Spider-Man, life as superhero is become a routine to Peter Parker (Andrew Garfield) He’s taking care of bad guys and protecting the city, while living a normal life; trying to make sure he stays one step ahead of his aunt (Sally Fields) and struggling with a promise he made to his relationship at a distance with Gwen Stacy (Emma Stone), who is also struggling with her relationship with dating Peter and his alter ego of Spider-Man. At the same time, Max Dillion (Jamie Foxx), a socially challenged and undervalued electrical engineer at Oscorp, accidentally falls into a tank of electrified eels and is reborn as Electro, a super-powered man with the power to harness and conduct electricity. Relationship-wise, it’s a Peter Parker-Mary Jane versus Peter Parker-Gwen Stacey, so comparing it will be like comparing apples and oranges. Although I’ve got to admit the effects of the Amazing Spider-Man trilogy is much better (10 years does a lot for the CGI). Though Peter Parker is torn between superheroics and love, and Doctor Octopus is split between good and evil (as he and his tentacles battle for control of his mind) Sam Raimi and his team don't fuss. They provide everything with utter confidence that will find it all thrilling. How many superhero films give us such a peak into the warm marriage of a villain? How many climaxes are the villain saving the day?"
      
  },  
  {id:3, 
    ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/03/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      title:'Creed III',
      Overview: 'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. ',
      description: "This reminded me quite a lot of 'Rocky IV' (1985) only instead of a Russian auto-box doing the challenging, it's 'Damian' (Jonathan Majors). Former champion 'Adonis' (Michael B. Jordan) is living the life of a retired sportsman, wealthy and happy with his family whilst managing the gym with 'Duke' (Wood Harris). Leaving, one afternoon, he discovers a guy sitting on his car and after a quick chat realizes that it's his long-lost childhood pal who has been incarcerated for the last eighteen years. He ('Damian') is now determined to succeed in the ring and so his friend tries to sort it all out - only to discover that this lean, mean, fighting machine has an altogether different agenda and that is going to force the former champ to prove whether or not he still has what it takes. The story is a hybrid of too many others and plays out as predictably as the sun coming up. Add to the mix a degree of familial discord and melodrama and we are left with something largely forgettable that I found to be a pretty poor relation of the previous, much more charismatic and grittier efforts in this franchise. The actual boxing scenes are impressively photographed but there's just no jeopardy - and I'd largely given up. Pretty to look at, yes - but not a great watch."

  },
  {id:4, 
    ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 05/05/2023',
      img: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/04/e90cef62-baa2-405c-95c1-c1a3912b8843-the-hunger-games-the-ballad-of-songbirds-snakes-BOSS_UNIT_220920_01273_R.jpg_max_rgb-e1682640611197.webp?resize=860%2C280&ssl=1',
      title:'Guardians of the Galaxy Vol. 3',
      Overview: 'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
      description: "Guardians of the Galaxy Vol. 3 is the perfect farewell to this quirky group of rogues we never expected to love so much.\n\nOur faith in the Marvel Cinematic Universe waned throughout Phase 4 with films that felt hollow, rushed, and insincere. Guardians of the Galaxy Vol. 3 rekindled my hope as James Gunn and the cast’s love and passion for these characters shined in every moment of this beautiful, heartfelt send-off. Gunn reminded us of the magic of comic book movies when the storyteller cares more about the characters than the box office. Chris Pratt, Bradley Cooper, Karen Gillan, Dave Bautista, and the rest of the cast pour themselves into entertaining and genuine performances. This film is surprisingly emotional and had me wondering how they convinced me to care so deeply about such a zany group of goofballs, but that they did. Vol. 3 is one of the best conclusions to a film trilogy that had me leave the theater full of satisfaction and nostalgia. While Guardians of the Galaxy Vol. 3 is wonderful in nearly every way, if I had a complaint, it would be the soundtrack felt forced at times rather than complimenting strong moments in the first film. The villain wasn’t exceptional but was better than the average Marvel villain, and honestly, Vol. 3 wasn’t about the villain or battles as much as it was a farewell to a family of heroes we have all come to love. This movie is well worth your time, and the fantastic effects and cinematography warrant a trip to the cinema to enjoy it to its fullest! MCU doubters need to set aside their skepticism and enjoy saying goodbye to these beloved characters with this outstanding film."
    },
    {id:5,
      ide: 5, 
      cat: "Hollywood",
      for: "ArticleList",
      date:'04/18/2023 ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg',
      title:'Ghosted',
      Overview: 'Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.',
      description: "The direction and visuals were all fairly good. The visuals looked fine for the majority of the film with no complaints whatsoever, including Ana de Armas’ wig. The direction was good, with some decent action choreography that was filmed pretty well, although there were a few scenes that suffered from too many jump cuts. I thought the intimate scene towards the beginning of the film was very stylistic and done really well. It was not just your standard grunts and moans that you see in so many films today.\n\nThe story was very oddly paced. The beginning section was really rushed, and the romantic build-up did not feel genuine in the slightest. Due to a poor script, their chemistry was non-existent in some sections, as the dialogue was atrocious. While there are some laughs to be had for sure, the majority of the comedy did not work for me. There was heavy use of modern songs throughout the entirety of the film. While some sections were complimented by the tracks, many others felt really out of place.\n\nThe performances were decent, but I think were hindered by the poor script. Ana de Armas was fine, although I never really liked her in anything since Knives Out as her performances always seem a little dull. Chris Evans played a character he's played many times before, which was entertaining, but he could not alone save the terrible dialogue he was given. "
  },
  {id:6,
    ide: 6, 
      cat: "Hollywood",
      for: "ArticleList",
      sp: "home-latestBig",
      date:' 12/16/2022',
      img2: 'https://s3.india.com/wp-content/uploads/2022/12/Avatar-2-Box-Office-Opening-Weekend-Worldwide-James-Camerons-Film-to-Collect-Numbers-Never-Heard-or-Seen-Before-Globally.jpg',
      img: "https://s3.india.com/wp-content/uploads/2022/12/Avatar-2-Box-Office-Opening-Weekend-Worldwide-James-Camerons-Film-to-Collect-Numbers-Never-Heard-or-Seen-Before-Globally.jpg",
      title:'Avatar 2: The Way of Water',
      Overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      description: "More than ten years have passed since the events of the  Avatar film 2. Avatar 2: The Way of Water sees Jake Sully (Sam Worthington) as chief as he and Neytiri (Zoe Saldana) now have five children. Humans have returned to Pandora once again to attempt to colonize it. "
  },
  {id:7, 
    ide: 7,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/17/2023 ',
      img: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/03/gb_uk_shzam2_wb_com_uber_main_4320x1080_intl-e1682040203920.jpg?zoom=2&resize=860%2C280&ssl=1',
      title:'Shazam! Fury of the Gods',
      Overview: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      description: "Shazam! Fury of the Gods is a run-of-the mill superhero sequel that doesn’t progress the genre forward, but delivers two hours of pure entertainment. \n\n This film does not do any one thing great, but it was still a pretty decent watch. The plot is average—nothing we have not seen on the big screen before. Our villains have no development; their motivations are sound, but there is nothing further that develops them into something greater. \n\n This movie starts off incredibly strong, with a fantastic first act that had me laughing hysterically. The comedy hits more often than not, which was a surprise for me. There is a bridge rescue scene that is electric. The combination of I Need a Hero mixed with all of the heroes showcasing their abilities was amazing. I think superhero films have dropped the ball by not showing heroes rescuing everyday people. The stakes have gotten so high outside of the everyday troubles that this art is lost. I really enjoyed that aspect of the film, but unfortunately, after the first act, this story becomes inflated to a point where it is indistinguishable from many other superhero blockbusters.\n\n The final act is overly long and bloated with a plethora of CGI monsters for our heroes to defeat. I think the CGI actually looked pretty good, but it just was not an engaging conclusion for me. The stakes were high, but not built up properly for me to be genuinely interested. The action is pretty decent, but I couldn’t care less. The finale did have emotional beats in terms of the family connection, which worked surprisingly well. That is when this franchise works best. When the focus is on family and not on god's attempts to destroy Earth, \n\n The performances overall were pretty good. Zachary Levi is fantastic as Shazam; he has mastered the art of playing a child in a man's body. Jack Dylan Grazer is hilarious; his comedic timing is brilliant. Grace Caroline Currey is a queen. Rachel Zegler is a standout, and her chemistry with Grazer is top notch. The rest of the Shazamly do a great job as well. I think Helen Mirren and Lucy Liu are fine as antagonists but were wasted with a lack of screen time and development. \n\n Overall, this might not be good, but it is entertaining. That is a lot more than can be said for some of the recently released superhero films (Black Adam and Ant-Man and the Wasp: Quantumania). "
    },
    {id:8,
      ide: 8, 
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023',
      img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      title:'Evil Dead Rise',
      Overview: 'Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      description: "This is certainly a triumph for the visual and audio effects folks. Otherwise, I found it all a bit derivative and frankly a rather classless rehash of the much more entertaining original. It's tough to just keep on re-inventing these themes - they do tire, and as I reckon with the recent updates of the Halloween franchise, they maybe just rely too heavily on a current generation who were not around to see the originals in the cinema first time round, and who maybe just don't appreciate that the acting and the writing - though never exactly crucial to these plots - did have more of a role than just relying on well made-up (virtual) demons spinning around the ceiling emitting threatening shrieks. It's not terrible - it moves along quickly for ninety minutes and might just put you off a bath anytime shortly afterwards, but there just isn't any real sense of menace or jeopardy and to be honest I wasn't entirely sure that the family weren't nightmarish enough - before their visitor arrived. "
    },
    {id:9, 
      ide: 9,
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023  ',
      img: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/04/ROTB-Promotional-poster-00-e1682635114753.jpg?zoom=2&resize=860%2C280&ssl=1',
      title:"TGuy Ritchie's The Covenant",
      Overview: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.',
      description: "Director Guy Ritchie is no stranger to crafting exciting action films, but his latest project is quite different than his previous work. The narrative is linear, there aren’t any montages, and the story isn’t about criminals, gangsters, or Brits. Fans of Ritchie will absolutely still recognize his visual style (hello, overhead shots) and testosterone-fueled themes, but 'The Covenant' is a more dramatic, mature, and restrained work from the legendary director.\n\nSet during the war in Afghanistan in 2018, the film tells the story of U.S. Army sergeant John Kinley (Jake Gyllenhaal) and his local Afghan interpreter, Ahmed (Dar Salim). Called a traitor by his people for helping the Americans, Ahmed has volunteered to seek revenge against the Taliban that killed his son. He has also been promised visas for his service so his family can flee to safety in America. After a lethal ambush in the desert, Kinley is gravely injured by enemy fire. With his platoon gone, Ahmed refuses to leave a fellow soldier behind to die, so he drags Kinley through the mountainous terrain in order to get him back to the base for medical help.\n\nThe film tells the story of their 100 mile journey, but then pivots to Kinley’s return to the United States. It’s months after he gets home that Kinley learns Ahmed and his family were not given safe passage as promised and, as a way to repay the debt he owes his friend, he returns to Afghanistan to retrieve them. It won’t be easy, because Ahmed has been placed at the top of the Taliban’s most wanted hit list.\n\nIt’s a meaningful story of honor and brotherhood wrapped up in an intense wartime thriller. The story is told in three major acts, from the early days Ahmed and Kinley spent chasing IEDs, to their dangerous journey, to the red tape of getting a man what he’s owed. There are plenty of thrilling acting sequences throughout, and they will keep you on the edge of your seat.\n\nRitchie has an extraordinary sense of timing and instincts for shooting action scenes, and the brutal, graphic wartime violence puts you in the be-or-be-killed survival mind of a front line soldier."
},
    {id:10, 
      ide: 10,
      cat: "Hollywood",
      for: "TheTopList",
      date:'  09/03/2022',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg',
      title:'The Last Kingdom: Seven Kings Must Die',
      Overview: 'In the wake of King Edwards death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.',
      description: " Seven Kings Must Die is the conclusion of The Last Kingdom series. A conclusion that didn't feel necessary as the story ended with a satisfying resolution and characters we had grown to love over five seasons finding happiness and a rewarding future. Instead, this 2-hour movie is more of a finale that disrupts our story's happy ending and leaves it all with less closure than before. With the promise of a movie, I was hoping that the film would enjoy greater production quality and resources than the typical show, but that was not the case. Seven Kings Must Die was just an entire season of The Last Kingdom crammed into 2 hours. Fans of the series might enjoy seeing more of their favorite characters (although they might be disappointed with the conclusion of those characters' stories). Unfortunately, those unfamiliar with The Last Kingdom would be confused by the partial narrative they receive with this film. Seven King Must Die might have been a decent finale to an additional season of the show, but as someone who liked how the show ended, I wish I had joined my wife and gone to bed without finishing the film. The show is excellent, so watch that instead. It really isn't as bad as I am sharing, but I was happier as a fan without it, and non-fans would probably not find it worth their time, either."
    },
    {id:11,
      ide: 11, 
      cat: "Hollywood",
      for: "TopList",
      date:' 05/04/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      title:'The Mother ',
      Overview: 'A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.',
      description: "Ironically, these tale about a mother and daughter, fails because the male characters have no depth. The villain is evil sure, but also extremely stupid and escaping from her first attempt to kill him in a very unbelievable and unexplained way.\n\nThe romantic tension between Cruise and the mother also doesn't work and the age old friendship with Jons is also not given any backstory. I'm enclined to blame the casting here. Well, the story was lacking and oddly edited as well, but it may be because there wasn't much to work with. Either way, it's clear this is supposed to be about a mother/daughter relationship, but also be an action move and the director / writers / actors couldn't make it work. 3/10, 2 points cause I've seen worse, not because I can find something positive in it. "
    },
    {id:12, 
      ide: 1,
      cat: "Bollywood",
      for: "ArticleList",
      date:' 23 December, 2016 ',
      img: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1-306x393.jpg',
      title:'Dangal ',
      Overview: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      description: "Disney Pictures, UTV Software Communications Ltd. and Aamir Khan Productions’ Dangal, as the name suggests, is a film about wrestling. The film is a biopic of Mahavir Singh Phogat, one of the legendary wrestlers of India.\n\nRight from the word go, Mahavir Singh Phogat (Aamir Khan) lives with a dream of winning a gold medal for India in the international arena. Because of reasons which were beyond his control, he becomes unsuccessful in fulfilling his most cherished dream. That’s why he dreams of having a son from his pregnant wife (Sakshi Tanwar), in order to fulfil his dream. As luck would have it, all the four children turn out to be daughters, which saddens Mahavir Singh Phogat to a large extent. One day, a certain incident in the school involving his two daughters Geeta (Zaira Wasim) and Babita (Suhani Bhatnagar) changes his perspective about his daughters. Thereafter, he starts his rigorous training sessions with Geeta and Babita, in order to enable them to win the much cherished gold medal for India.\n\nDoes Mahavir Singh Phogat’s incessant training with his daughters bear fruits, do his daughters make him proud by realising his dream of winning the gold medal and what are the constraints that the Phogats face whilst achieving their goal is what forms the rest of the film. "
    },  
    {id:13, 
      ide:2,
      cat: "Bollywood",
      for: "ArticleList",
      sp:"home-latestArt",
      date:' 25 January, 2023',
      img: 'https://resizing.flixster.com/qO53dQK8Q2ED_EgNuRKtKGQPODs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEwYTllYmMyLTE5N2EtNDVmYy1iZWUzLWI3NTAwZDEwZGQ2Yi53ZWJw',
      title:'K.G.F: Chapter 1',
      Overview: "this  Movie is the story of a passionate agent working for the country. In 2019, after the government of India revoked Article 370, an enraged Pakistan general Qadir (Manish Wadhwa) decides to take revenge. He signs a contract with Jim (John Abraham), a dreaded terrorist who has an extreme enmity towards India.",
      description: "This is the story of a passionate agent working for the country. In 2019, after the government of India revoked Article 370, an enraged Pakistan general Qadir (Manish Wadhwa) decides to take revenge. He signs a contract with Jim (John Abraham), a dreaded terrorist who has an extreme enmity towards India. RAW's Nandini (Dimple Kapadia), meanwhile, gets a glimpse of a mysterious lady in France, with whom she has had sort of a past connection. Due to this development, she decides to meet Pathaan (Shah Rukh Khan), an agent who was once one of the best agents for India but has now supposedly gone rogue. Three years ago, Pathaan had come across Rubina Mohsin (Deepika Padukone) and from thereon, things went downhill for him. But the country right now needs Pathaan to save itself from the clutches of Jim. What happens next forms the rest of the film."
    },{
      id: 14,
      ide:3,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 06 September, 2019 ",
      img: "https://upload.wikimedia.org/wikipedia/en/5/50/Secret_Superstar_-_Poster_3.jpg",
      title: "Secret Superstar ",
      Overview:" This is the story of loser friends trying to become winners and learning some important lessons on the way. Annirudh Pathak aka Anni (Sushant Singh Rajput) is a middle-aged man residing in Mumbai with his son Raghav (Mohammad Samad) after divorcing his wife Maya (Shraddha Kapoor).",
      description: "This  is the story of ‘loser’ friends trying to become winners and learning some important lessons on the way. Annirudh Pathak aka Anni (Sushant Singh Rajput) is a middle-aged man residing in Mumbai with his son Raghav (Mohammad Samad) after divorcing his wife Maya (Shraddha Kapoor). Raghav is under immense pressure as he has just given the entrance exams for engineering. Both his parents were rankers when they gave the entrance examination. As a result, Raghav is feeling the pressure tremendously. Anni however is confident that he’ll make it. Finally, the result is out and sadly, Raghav fails to make the cut. Scared that he’ll be labelled a loser all his life, he attempts to commit suicide by jumping from a high rise. He survives but the doctor treating him, Dr Kasbekar (Shishir Sharma) makes it clear that the chances of him recovering are slim. Anni is obviously heartbroken and with no option in hand, he decides to adopt a novel method to ensure that Raghav gets the will to live. He starts narrating him his story as an engineering student in Mumbai’s National College of Technology. He’s allotted a room in Hostel no 4 aka H4, considered to be the residence of the ‘Losers’. At first, Anni is flabbergasted with the kind of characters in H4. But slowly, he becomes good friends with some of them like Gurmeet Singh Dhillon aka Sexa (Varun Sharma), Acid (Navin Polishetty), Sundar aka Mummy (Tushar Pandey), Bevda (Saharsh Kumar Shukla) and Derek (Tahir Raj Bhasin). The number of girls in engineering is negligible and the most popular among them is Maya (Shraddha Kapoor). Anni manages to woo her and they soon start dating. However, Anni and others are still called ‘Losers’ and there’s a reason for it. The General Championship aka GC is a sports tournament that takes place annually in the college. The students of H4 always lose miserably and are the last among the ten hostels. Hence, the ‘Loser’ tag."
    },
    {
      id: 15,
      ide:4,
      cat: "Bollywood",
      for: "ArticleList",
      img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/07/bajrangi-bhaijaan-review.jpg ",
      title: "Bajrangi Bhaijaan",
      date: "11 January, 2019",
      Overview:"URI: THE SURGICAL STRIKE is based on the true events of the surgical strike carried out by the Indian armed forces following the September 2016 Uri attacks, which was termed as one of the deadliest attacks on the Indian forces. The film opens depicting Indian soldiers being ambushed in Manipur,...",
      description: "URI: THE SURGICAL STRIKE is based on the true events of the surgical strike carried out by the Indian armed forces following the September 2016 Uri attacks, which was termed as one of the deadliest attacks on the Indian forces. The film opens depicting Indian soldiers being ambushed in Manipur, followed by retaliation by the forces on terror bases across the India - Myanmar border in the North East. From there, the story follows Major Vihaan Shergill (Vicky Kaushal), who seeks retirement owing to his mother's ill health as she suffers from Alzheimer’s disease. In the meantime, Pakistani terrorist outfits carry out an attack at Uri Army Base camp in Kashmir. Vihaan’s childhood friend and brother-in-law Captain Karan Kashyap (Mohit Raina) along with some other fellow army mates are martyred in this attack. Following this, Vihaan is forced back by emotions to extract revenge by leading the strike force. Vihaan puts together a team to conduct the surgical strike under the guidance of PMO bigwig Govind Bhardwaj (Paresh Rawal) with special orders from PM (Rajit Kapur) himself. Special Agent Pallavi (Yami Gautam) helps Vihaan to detect the location of the launch pads and details of the target. And what follows is the execution of the surgical strikes across PoK. "
    },
    {
      id: 16,
      ide:5,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 19 December, 2014",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTMOHYLrof62cTZuBRFU6trKCMTzcaB-Q-w&usqp=CAU",
      title: "Sultan",
      Overview:"UTV Motions Pictures, Vidhu Vinod Chopra Films and Rajkumar Hirani Films ' PK stars Aamir Khan along with Anushka Sharma, Sanjay Dutt, Sushant Singh Rajput. The film is about a childlike innocent character who in search of his 'property', comes face to face with the reality of human race",
      description: "UTV Motions Pictures, Vidhu Vinod Chopra Films and Rajkumar Hirani Films ' PK stars Aamir Khan along with Anushka Sharma, Sanjay Dutt, Sushant Singh Rajput. The film is about a childlike innocent character who in search of his 'property', comes face to face with the reality of human race and their selfish motives.\n\nThe story starts when PK (Aamir Khan) loses his 'property', without which he is left homeless on an unknown desert. Devastated with this incident, he goes in search of the man responsible for this, without even knowing any details of him. While people advice him to take the help of God, PK too sets out in search of 'God'. Gradually, he realizes that God isn't a 'single person' as there are different Gods and to reach him there are his 'messengers' (read 'Godmen'). That's when he comes across Tapasvi (Saurabh Shukla), who fools people stating that he has the proof of God's existence. "
    },
    {
      id: 17,
      ide:6,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 22 December, 2017",
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/10/war-box-office-pre-release-buzz-a-day-before-its-piping-hot-and-all-set-for-bumper-openingwar-box-office-pre-release-buzz-a-day-before-its-piping-hot-and-all-set-for-bumper-opening-001.jpg",
      title: "War",
      Overview:"The movie escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest...",
      description: " The Movie escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest and the most dangerous terrorist organization. The Americans are angry and they launch an attack on Abu and his convoy, and it injures Abu. At the same time, a group of 40 nurses – 25 Indian and 15 Pakistani – are heading to the hospital where they work. Abu’s men force the nurses to take an injured Abu with them for immediate treatment. They also take over the hospital and keep the nurses as hostage. The Americans then decide to launch an airstrike on the hospital within 7 days. Hence, the Indians have just a week to rescue the nurses. Infiltrating into the high security ISC region is next to impossible. The senior officer of RAW, Shenoy (Girish Karnad) suggests that Tiger should be called in as he’s the only one who can successfully complete this mission. Tiger is found and he takes up the job. How Tiger manages to infiltrate the ISC area and rescue the nurses forms the rest of the film"
    },
    {
      id: 18,
      ide:7,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 31 May, 2013",
      img: "https://www.filmibeat.com/ph-big/2019/09/saaho_156836864130.jpg",
      title: "Sahoo",
      Overview:"It is a story of the exhilarating and terrifying journey of four characters as they navigate through their youth; from their carefree laughter as they set off on a holiday together in their colleges days, until their bittersweet tears as they watch the first of their bunch get married.",
      description: "Opposites attract! He's charismatic, gregarious and passionate with an indomitable spirit to explore places. She's the archetypical seedhi-saadhi girl, Plain Jane actually, an academician who's focused on attaining what she's zeroed for herself as a career. Add two more characters who cross their paths in this beautiful journey called life. Now place these four straight-out-of-life characters in a bottle, shake with a swizzle stick and presto, a love story is ready to be served.\n\nCome to think of it, Ayan Mukerjis second outing YEH JAWAANI HAI DEEWANI is akin to his accomplished directorial debut WAKE UP SID. Yet diverse! The characters in both, WAKE UP SID and YEH JAWAANI HAI DEEWANI, undergo a metamorphosis and transform into mature individuals with the passage of time. Life is a great teacher after all. At the same time, YEH JAWAANI HAI DEEWANI is dissimilar from films of its ilk -- and conventional love stories too -- because Ayans characters never embark upon the run of the mill, mundane route to express feelings towards each other.\n\nLike all rom-coms, YEH JAWAANI HAI DEEWANI sparkles with romance, merriment and heartache, is brightly glossy and boasts of crackling chemistry between its lead actors, but Ayan makes sure the heady concoction never waters down. The best part is, he never borrows from romantic cliches that most love stories depend upon and that, in my opinion, is this films biggest strength. Expect no unwanted melodrama, no unwelcome characters, no earsplitting background music to accentuate the proceedings... the best thing about YEH JAWAANI HAI DEEWANI is that its refreshingly unique within the conventional Hindi film format. "
    },
    {
      id: 19,
      ide:8,
      sp: "home-ban",
      cat: "Bollywood",
      for: "TopList",
      date:" 28 April, 2017",
      img2: "https://www.re-thinkingthefuture.com/wp-content/uploads/2023/05/A10049-An-architectural-review-of-Bahubali.jpg",
      img: "https://www.re-thinkingthefuture.com/wp-content/uploads/2023/05/A10049-An-architectural-review-of-Bahubali.jpg",
      title: "Baahubali  The Conclusion Movie",
      Overview:"Baahubali : The Conclusion is the second and final part in the Bahubali series. The second film in the series sets out to answer why Katappa had killed Baahubali. It, therefore, tells the story of Shiva’s father, Amarendra Bahubali. In a sense, the second film in the series is a..",
      description:" Baahubali : The Conclusion is the second and final part in the Bahubali series. The second film in the series sets out to answer why Katappa had killed Baahubali. It, therefore, tells the story of Shiva’s father, Amarendra Bahubali. In a sense, the second film in the series is a prequel to the first one as a major part of the second film deals with the flashback about Amarendra Bahubali.\n\nIn the present film, it is shown that Amarendra Bahubali has been brought up by Sivagami along with her own son, Bhalaladev. In fact, Sivagami has decided to make Amarendra Bahubali the king of Mahishmati kingdom, much to the shock of her husband (Nasser) and son, Bhalaladev (Rana Daggubati). However, on the day of the coronation, Sivagami makes Bhalaladev the king because Amarendra Bahubali wants to marry Devasena against Sivagami’s wishes. Sivagami has, a few days back, promised her son that she would get him married to Devasena but, unaware of his mother’s promise to Bhalaladev, Amarendra Bahubali has promised Devasena that he would marry her and look after her all his life. Even Deva­sena is keen to wed Amarendra Bahubali as she has fallen in love with him.\n\nUnhappy with Amarendra Bahubali’s stand, Sivagami appoints Bhalaladev as the king, and Amarendra Bahubali as merely his lieutenant. Although Bahubali marries Devasena, the couple does not have the blessings of Sivagami. Soon, Devasena gets pregnant with Amarendra Baahubali’s child. Before she can deliver the child, Amarendra Bahubali and Devasena are thrown out of the palace by Sivagami due to the machinations of Bhalaladev and his father. As if this were not bad enough, Katappa kills Amarendra Bahubali on the very day Devasena gives birth to their child. Why Katappa had murdered Baahubali is revealed by him (Katappa) to Shiva who has realised that he is actually Amarendra’s 25-year-old son, Mahendra Bahubali.\n\nIt is now the turn of Shiva alias Mahendra Bahubali to avenge his father’s murder and his mother, Devasena’s captivity by Bhalaladev for 25 long years. What happens then? Who eliminates whom? And who lives happily thereafter? Who rules Mahishmati kingdom? "
    },
    {
      id: 20,
      ide:9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date:"14 April, 2022 ",
      img: " https://media5.bollywoodhungama.in/wp-content/uploads/2019/03/KGF-19-306x393.jpg",
      title: "K.G.F – Chapter 2 ",
      Overview:"KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra...",
      description: " KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra Desai (Lakki Lakshman). They had expected to rule KGF and take over its immense wealth. However, Rocky, with the help of the slaves who consider him a messiah, usurps the throne. He even kills Virat (Vinay Bidappa), brother of Garuda and the heir apparent to the KGF throne. Rocky however spares Vanaram (Ayyappa P Sharma), the commander of the army at KGF. Vanaram, angry at first, joins Rocky and trains young kids who become the new guards of the territory. Rocky discovers that there are several unexcavated mines in the area and he orders the men to start extracting gold from these places. The idea is to discover as much gold as possible in the shortest possible time. Meanwhile, Adheera (Sanjay Dutt), brother of Suryavardhan, the founder of KGF, was presumed dead. However, he is alive and arrives at KGF for revenge and to claim ownership. He smartly gets Rocky out of KGF and shoots him. He allows Rocky to survive so that the word is spread in KGF that the terrifying Adheera is here. Rocky recuperates but realizes that no one is able to move out of KGF as Adheera’s men have surrounded the mines. Meanwhile, Shetty (Dinesh Mangaluru), Rocky’s ex-boss in Bombay, has tied up with fellow gangsters across West and South India, and plans to act against Rocky. They are also dealing with Inayat Khalil (Balakrishna), a dreaded gangster from Dubai. How Rocky fights all these elements forms the rest of the film."
    },
    {
      id: 21,
      ide:10,
      cat: "Bollywood",
      for: "TopList",
      date:" 25 December, 2009 ",
      img: " https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
      title: "3 Idiots",
      Overview:"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description: " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way."
    },
    {
      id: 22,
      ide:11,
      cat: "Bollywood",
      for: "TopList", 
       date:"12 July, 2019 ",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2017/06/Super-30-1-306x393.jpg ",
      title: "Super 30",
      Overview:"SUPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj...",
      description: "UPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj Tripathi). Anand manages to solve a complex mathematical problem, which has baffled scholars all around the world. His feat lands him a seat in the prestigious Cambridge University. His father Eshwar Kumar (Virendra Saxena) is a postman who takes out his PF to fund Anand’s foreign education. When the money falls short, he and Anand knock at the doors of the education minister, who had promised him help. But the minister refuses to help. Meanwhile, Eshwar passes away one day suddenly. He was the only earning member of the family and hence, Anand sheds his ambition and begins selling papad to survive. One day, he bumps into Lallan Singh (Aditya Srivastava) who runs Excellence Coaching Centre, an institute for those giving the IIT-JEE exams. He is aware of Anand’s brilliance in mathematics since he was in the college when Anand was felicitated. He gets Anand enrolled in his coaching institute as a premium teacher. Since Anand’s teaching methods guarantee success, he becomes quite sought after. Excellence Coaching Centre management even promote themselves by using Anand’s picture on their banners. Anand’s financial condition also improves as he’s even made one of the signatories. However, he soon realizes that some brilliant students aren’t getting a fair chance to excel in life because of their underprivileged background. Overnight, Anand quits Excellence Coaching Centre. He starts his own centre, where he decides to teach 30 students for IIT entrance exams for free. Not just that, he even arranges for their accommodation and food. Lallan obviously is livid and he tries his best to persuade Anand. When nothing works, he tries to demotivate Anand, saying that all his students who fail will go back to their impoverished lives. It’s important that each and every student of Anand manages to crack the IIT exam. What happens next forms the rest of the film. "
    },
    {
      id: 23,
      ide:1,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 15, 2023",
      img: "https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.jpg?s=612x612&w=0&k=20&c=KxBKdcWFKWCQwLWiil-Rgvlpl9l8SZXwkvjnCiWcia8=",
      title: "Salmon Tacos with Mango Corn Salsa",
      Overview:"Super easy salmon tacos loaded with a mango, sweet corn, and cucumber salsa!",
      description: "These tacos are THE dinner for me right now! \n\n A few nights ago, I made them (again), and I set the sheet pan of salmon down on the table and my whole family literally descended upon it and started grabbing at the salmon with their hands and forks as I stood by watching in half shock, half pride. It was a feeding frenzy. \n\n Of course, we love salmon. It’s a great source of nutrition and protein and, when cooked well, it gently slides apart into buttery, juicy, delightful little flakes.\n\n But I’m not going to lie to you: the main event here is that mango corn salsa. \n\n The salmon itself is completely SOS (taco seasoning and THAT’S IT), which is why I think it makes sense to put all your effort and energy into the salsa. This salsa is also the thing that’s going to keep you sitting at the table long after you’re done eating tacos, just scooping some extra salsa bites all on its own and suddenly thinking of it as more of a salad? It can be a salad, right? I would totally eat this salsa on its own as a salad. \n\n Each bite is extra crispy and unexpected from the raw sweet corn and cucumber with a little burst of juicy flavor. But it’s also mainstream enough with the mango that my two young kids are usually happy to devour it right along with us. \n\n I love a million sauces on my tacos (okay, fine, on every recipe). But with this one, all it needs is a bit of extra lime and honey to finish it off. Simple, minimal effort, max deliciousness."

    },
    {
      id: 24,
      ide:2,
      cat: "Food",
      for: "ArticleList", 
       date:"MAY 8, 2023 ",
       sp: "home-latest",
      img: "https://pinchofyum.com/wp-content/uploads/Chili-Garlic-Noodles-61-2.jpg",
      title: "Smashed Broccoli and Soft Eggs",
      Overview:"Slippery, spicy, bossy noodles with a minimal-ingredient sauce, topped with a pile of roasty smashed broccoli and a perfectly messy soft egg. Yes, please.",
      description: "Oh man, these slippery, spicy noodles are a TREAT. Silky, rich, full of deep flavor and a flash of heat! \n\n I would say this recipe belongs less in the “normal family dinner” category and more in the “hangry / hardcore craving / last minute meal” category.\n\nThe big flavors end up being a bit much for my kids, so I make this for a need-it-right-now hungry mom moment that calls for something ultra-satisfying, silky, and spicy. I often end up eating it right over the stove in a moment of pure and absolute joy. \n\nAnd luckily, the components can work for everybody (buttered noodles is always a kid win, plus eggs and broccoli!), so it can be easily worked into something family-friendly or meal-prep friendly if you batch some extra broccoli and eggs to throw into other meals throughout the week. SOS at its finest. \n\n The miso just does something magical to this whole thing – if you don’t have it I think you’ll still end up just fine. But if you have it (hopefully I already convinced you to buy some with the Miso Crunch Salad!) it will elevate the flavor and add a depth that’s just really amazing for such a fast and easy recipe."
    },

    {
      id: 25,
      ide:3,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 1, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-960x960.png",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:"Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description: "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment." 
       
    },

    {
      id: 26,
      ide:4,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 25, 2023 ",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      title: "Join Us for Three Weeks of Meal Plans",
      Overview:"Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!",
      description: "Ahhhhh, summer. We love to love it and also how are there this many end-of-school projects and assemblies and how am I supposed to rush to one more dance class and why do I feel like I want to do anything else besides cook when it’s this nice out. "
    },

    {
      id: 27,
      ide:5,
      cat: "Food",
      sp:"home-latestArt",
      for: "ArticleList", 
       date:" APRIL 24, 2023",
      img: "https://www.allrecipes.com/thmb/1hFDFMaozqv4RZ8NQoF9pZgzIoU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4561727-578dd97bd94c4f978869e2506958cafb.jpg",
      title: "Rice Salad",
   
      Overview:"Easy Salad | Easy Salad Recipe | Healthy Rice Recipe | Simple Salad Recipe ... .",
      description: "Cabbage, kale, shrimp, cilantro, peanuts, and creamy sweet miso dressing… I could eat this every day for lunch and be happy with my life. (And by could, I mean I currently am.) \n\n We were actually planning to publish this later in the SOS Series, but I could not wait to get this into your hands because I’m so obsessed with it. So here she is, making an early entrance! This salad is so perfect for these early days of spring / summer when it’s starting to warm up and the grass is turning green again and the body is just feeling aggressively ready for salads. \n\n So many of these salad ingredients are easy to buy pre-made / pre-ready to eat (I get a lot of them at Trader Joe’s):  "
    },

    {
      id: 28,
      ide:6,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 17, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-960x960.png",
      title: "Red Chile Tostadas with Eggs",
      Overview:"We’re making Red Chile Tostadas with Eggs! We’re talking creamy, crunchy, drippy, and tangy – the absolute perfect flavor combination.",
      description: " The combination of flavors and textures is unmatched, plus so many of these things can be made ahead or store-bought (the enchilada sauce, the refried beans, the tostada if you want). It is my perfect food combination: something creamy, something crunchy, something tangy, and something drippy and messy to really make you feel alive. \n\n I have eaten (slash, continue to eat) these for ANY meal of the day, which is another reason why I love them. They are breakfast, brunch, lunch, and dinner all in one cute, crunchy little package. \n\n I hope you love these as much as I do – and if you do, these cauliflower tostadas with queso are your next stop! "
    },

    {
      id: 29,
      ide:7,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 10, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Cilantro-Orange-Chicken-61-Square-960x960.jpg",
      title: "Cilantro Orange Chicken with Rice and Beans",
      Overview:"This golden Cilantro Orange Chicken is so flavorful, crisped to golden brown perfection, and just very finger-licking good! Served with rice, beans, and a quick homemade pineapple salsa.",
      description: "This is a brand new recipe that’s part of our Spring 2023 SOS Series – in other words, EASY recipes! View our full collection of SOS recipes here.\n\n This post contains referral links for products we love. Pinch of Yum earns a small commission on these links at no cost to you, and the links will always be marked with an asterisk. We ♡ honesty! "
    },

    {
      id: 30,
      ide:8,
      cat: "Food",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" APRIL 3, 2023",
      img: "https://dashofsanity.com/wp-content/uploads/2021/08/IMG_0611.jpg",
      title: "Butter Chicken With Rice",
      Overview:"These butter chicken are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. Serious weeknight magic!",
      description: "Butter chicken, but make it \n\n Oh my goodness, it’s so good! My family is truly in love with this recipe.\n\n These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. It is a thing of beauty. I look forward to dinner all day long when I know we are having this. And as I’m sure you imagine, the leftovers are even better, so lunch the next day is something to look forward to, too.\n\n You can make it on the stovetop or in the Instant Pot, and you can use a regular or immersion blender to get your sauce nice and creamy. I often have a batch of baked chicken meatballs on hand so I like to use those, but this would be delicious and easy with some store-bought meatballs to really lock in the SOS goodness here "
    },

    {
      id: 31,
      ide:9,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 27, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Coffee-Cake-1-1200x1200.jpg",
      title: "Carrot Cake Coffee Cake",
      Overview:"Carrot Cake Coffee Cake! A super easy batter loaded with shredded carrots, topped with a thick crumbly cinnamony streusel, and finished with a melty sweet honey butter.",
      description: "This recipe is a fan favorite for spring and was originally published in 2021. It is also part of this year’s Spring Bucket List! Find out more about the bucket list here.\n\n I know it might be confusing – carrot cake, which is like vegetables meets cake, but also still cake, combined with coffee cake, which is also cake but the kind you can eat for breakfast and it will still be totally appropriate and, obviously, cakey? \n\n But no need to be confused. \n\n If you like a carrot cake that tastes just slightly cinnamony and teeters perfectly between springy and dense… \n\n And you like a coffee cake that is loaded with a mega amount of streusel topping… \n\n And you like cakes that look beautiful and taste even more beautiful with a proper shmear of honey butter… \n\ nI HELLO! Meet your one true match. This one is for you. "
    },

    {
      id: 32,
      ide:10,
      cat: "Food",
      for: "TopList", 
       date:" MARCH 13, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Favorite-Browned-Butter-Chocolate-Chip-Cookies-1-3-800x800.jpg",
      title: "Favorite Browned Butter Chocolate Chip Cookies",
      Overview:"Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, and melty little puddles of chocolate chips.",
      description: "Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, melty little puddles of chocolate chips and sprinkles of just enough salt to cut the sweetness and make you feel like you could probably eat 5 of them.\n\n My first favorite thing about these browned butter chocolate chip cookies is that they combine the best of both the thin-cookie and thick-cookie worlds with that satisfying little crunch around the edge AND underbaked centers that are thick enough to really sink your teeth into. Best. Of. Both. Worlds. \n\n My second favorite thing about these cookies is that they also just shine, and I mean really shine, with rich, deep, caramelly flavor thanks to a whole lot of browned butter. "
    },

    {
      id: 33,
      ide:11,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 6, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/salmon-burgers-on-a-plate-800x800.jpg",
      title: "Yummy Salmon Burgers with Slaw",
      Overview:"These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
      description: "These salmon burgers. They are just so extremely good. \n\n  We’re talking crispy outsides, flaky insides, and a perfect golden color, not to mention lots of nutrition, THANK YOU SALMON. \n\n They are also easy to make and require (usually) minimal, if not zero, grocery shopping, assuming you keep a decently stocked pantry. I love, love, love these crispy pan-fried little guys. \n\n And as if the salmon burgers weren’t good enough already to eat on their own (which, um, they are), I need you to make this slaw to serve your salmon burgers in/on/around. It is nothing fancy – just a shredded cabbage, yogurt, herbs, garlic, and vinegar situation, but paired with the salmon burgers? The crispy-salty-tangy combo is an ON-POINT combo. "
    },

    {
      id: 34,
      ide:1,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/1299421209/photo/diet-and-exercise-for-weight-loss.jpg?b=1&s=170667a&w=0&k=20&c=OilzXOdxnV_MeN5V9Q-Y5TvmhU2F8nNNXazNsfpqgiw=",
      title: "The Ultimate Sports Nutrition ",
      Overview:"Learn the basics of sports nutrition and get your sport-specific nutrition guide to optimize athletic performance.",
      description: " More the just eating well, sports nutrition is a strategic way of eating that optimizes your athletic performance. It ensures your calorie, protein, carbohydrate, fat, vitamin, mineral, and fluid intake will meet the demands of your sport, the unique needs of your body, and your individual goals. \n\n All so you can train your hardest, perform your best, and unlock your full potential as an athlete.\n\n In this article, we’ll give you the essential sports nutrition strategies for peak performance, backed by scientific recommendations and practical advice."
    },
    {
      id: 35,
      ide:2,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/02/motivational-interviewing-fb-768x403.jpg",
      title: "Motivational Interviewing:",
      Overview:"Motivational Interviewing: The proven coaching method that helps people change—even when they’re feeling stuck",
      description: "Coaches who use Motivational Interviewing function kind of like tour guides for someone exploring a new country.\n\ (In this case, that country is the Land of Fitness and Nutrition.) \n\n Like a personal tour guide, you have expertise, insider’s knowledge, and ideas on the best things to do, but you don’t have a programmed route that you’ll force clients to stick to. \n\n You might share some of your insights, but ultimately, your clients will decide where to go. \n\n  A good Motivational Interviewing coach will also be genuinely curious, respectful, and non-judgemental about a client’s preferences.\n\n(“Oh, you’d rather spend the day picnicking on the Seine instead of visiting the Eiffel Tower? I totally get that.”) \n\n You respect your client’s autonomy, and interact with them as an equal partner. \n\n You often say, “What would you like to do next? I have some ideas, but I’d love to hear what you’re thinking first.” \n\n  As a result, even when they’re in foreign territory, clients end up feeling supported, but also free. "
    },

    {
      id: 36,
      ide:3,
      cat: "Fitness",
      sp: "home-latest",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "data:image/png;base64,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",
      title: "The Deep Health ",
      Overview:"Good health isn’t just about your cholesterol levels, body composition, and fitness level. Here’s a deeper look.",
      description: " When most people hear that question, they immediately think about their blood work or maybe a nagging problem, like back pain or heartburn or migraines. \n\n Others might focus on a fitness achievement: “Just completed my third marathon this year. Never been healthier!” \n\nMany people simply consider their weight or overall appearance: \n\n [pinches stomach] “I’m still using the same belt hole I used in my twenties, so I must be healthy, right?”"
    },
    {
      id: 37,
      ide:4,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://c8.alamy.com/comp/2E1NCAA/six-characteristics-of-quality-care-2E1NCAA.jpg",
      title: "Deep Health -secret that transforms short-term fitness",
      Overview:"Losing 10 pounds. Running a half marathon. Getting six-pack abs. How do you turn short-term client goals into something meaningful, sustainable, and inspiring?",
   
      description: "superficial physical goals into substantive life gold? \n\n After working with over 100,000 clients, we believe you can get more ambitious—and be more effective and fulfilled—with an approach that goes far beyond the superficial. \n\n It’s called coaching for Deep Health.\n\n This is when all dimensions of health are in sync, instead of just the physical.\n\nIt’s not only about how your clients look or perform.\n\nIt’s also about how they think, respond, solve problems, and deal with the world around them.\n\n“Wait,” you might say. “I’m all for Deep Health, but my 4pm is here and they want to lose 20 pounds.” \n\n Coaching for Deep Health will help you get them there faster and more easily than ever before—in a way that fits their life and is sustainable. " },
    {
      id: 38,
      ide:5,
      cat: "Fitness",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/500874808/photo/lose-weight-concept-with-person-on-a-scale-measuring-kilograms.webp?b=1&s=170667a&w=0&k=20&c=HE_kBCOHR24_IicaEsutI2cZvTIxo7yMTRzFFw4w7RY=",
      title: "Body Fat Calculator & Body Fat Percentage Calculator",
      Overview:"Find out your body percentage and how it affects your health.",
      description: "Want to know your body fat percentage? This free body fat calculator estimates it instantly, using three scientifically validated formulas.\n\n But that’s just for starters: Our body fat calculator does way more than spit out numbers.\n\n In addition to getting your body fat percentage estimate, you’ll also receive a FREE report that’ll help you understand what your results REALLY mean—and what you should do next to reach your health and fitness goals. "
    },
    {
      id: 39,
      ide:6,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/01/blood-sugar-chart-1200-630-1-768x403.jpg",
      title: "Use continuous glucose monitors (CGMs)",
      Overview:"Just because you can track your blood sugar levels doesn’t mean you…",
      description: "Continuous glucose monitors were developed for people with type 1 and type 2 diabetes. The devices typically attach to the upper arm via skin-piercing filaments. They’re kept in place with an adhesive that makes them look like a nicotine patch. \n\n Continuous glucose monitors help people with diabetes identify swings in blood sugar before they cause problems. For those who depend on insulin, the CGM device can help their doctor modify the dose. \n\n It was only a matter of time until people without diabetes began exploring the potential of CGMs to help them meet their goals. \n\n An endurance athlete, for example, might want to know if continuous glucose monitors could help them maintain steady fuel levels. "
    },
    {
      id: 40,
      ide:7,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Fresh Start Effect",
      Overview:"Give your clients a jumpstart on their goals, any time of the year.",
      description: "Suppose you set a New Year’s resolution to start running. \n\n In your mind, your “old self” (the one glued to the couch) expires December 31. Your new self (the one who runs!) begins January 1.\n\n Because your brain distinguishes between these two selves, it’s much easier to believe that your “new self” will succeed.\n\n That might sound silly: After all, you won’t actually magically transform the moment the ball drops on New Year’s Eve or a new calendar day dawns.\n\n  But human psychology is a funny thing, and this separation of self enables us to release ourselves from our past “failures,” and believe that a different way forward is possible.\n\n That belief is critical for behavior change.\n\n “When we believe we can get better at something, we develop self-efficacy,” says Dr. Nordin. “Self-efficacy leads to increased motivation, enabling us to tackle the challenges in front of us, which ultimately leads to behavior change.” "
     
    },
    {
      id: 41,
      ide:8,
      cat: "Fitness",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"25/05/23 ",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Common stress-related questions",
      Overview:"These are the challenges most likely to plague your clients—and maybe you, too. Here’s a round-up of sage advice.",
      description: "The relationship between stress and health has gained a lot more attention and validity in the past 30 years.\n\n As a result, you’ve likely learned to associate stress with all kinds of terrible things: heart attacks, hair loss, early death.\n\n And while excessive, unrelenting stress definitely erodes health, let’s clear something up:\n\n Not all stress is bad.\n\n In fact, in order to thrive, we actually need some stress to feel juicy, purposeful, and alive. "
    },
    {
      id: 42,
      ide:9,
      cat: "Fitness",
      for: "TopList", 
       date:" ",
      img: "https://assets.precisionnutrition.com/2022/11/sleep-problems-fb-768x403.jpg",
      title: "Science-based solutions to the most vexing sleep",
      Overview:"if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.",
      description: "Google hears about everyone’s sleep problems, at all hours of the night. \n\n And chances are, if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.\n\n In this article, we’re going to cover everything you need to know about the sleep problems your clients are likely to struggle with the most, along with science-supported practices that can help.\n\n In this article, we’ll try to give you some resources to do that.  "
    },
    {
      id: 43,
      ide:10,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23  ",
      img: "https://exerciseright.com.au/wp-content/uploads/2022/09/cricket-injury.jpg",
      title: "Preventing Injuries in Youth Cricket",
      Overview:"Make time for sweating, meditating, time in nature—whatever helps you feel recharged and strong.",
      description: "When you think of your health, you might consider your blood pressure, cholesterol levels, and other physical markers that your primary care doc would examine at a regular check up. You might also think of the quality of your sleep, diet, or exercise.\n\n While “wellness” includes physical health, it’s more of a holistic concept that also captures mental, emotional, and spiritual / existential well-being. ",
      
    },
    {
      id: 44,
      ide:11,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23 ",
      img: "https://exerciseright.com.au/wp-content/uploads/2022/08/bipolar.jpg",
      title: "Lose 50, 75, 100+ pounds ",
      Overview:"Use these mindset strategies to get through the grind—and finally meet your best-feeling body.",
      description: "Rather, it’s about three people who kept going—overcoming the nearly universal setbacks and challenges during major body transformations.\n\n Not only did all three eventually lose 80-plus pounds apiece, but they also changed in other ways: Dom, Stephen, and Katey have all become certified health and nutrition coaches who now help others eat, move, and live better. \n\n In this story, you’ll discover their top mindset strategies for persevering when fat loss feels impossible (or at least just very frustrating). "
    },
    {
      id: 45,
      ide:1,
      sp: "home-ban",
      cat: "Technology",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img2: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/1422823415_0-sixteen_nine.jpg",
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/1422823415_0-sixteen_nine.jpg",
      title: "AI Takes the Wheel at the Indy Autonomous Challenge",
      Overview:"CNET gets a behind-the-scenes look at the event, where teams from around the world put their AI drivers to the test for the chance to win $1 million.",
      description: "I attended a race earlier this year where the winning car went 180 mph with nobody behind the wheel. That's because everything was in the hands of artificial intelligence. \n\n At the Indy Autonomous Challenge, teams from around the world crafted their very own AI driving systems and raced them head to head for the chance to win a $1 million cash prize. The event was held at the Las Vegas Motor Speedway shortly after CES in January. \n\n Big name brands from the automotive and computing world donated hardware to ensure every team was using the same basic vehicle and computing stack so that it really all came down to the AI. \n\n We spoke to representatives from various teams to learn about the challenges of building AI drivers to operate at such high speeds, what to do when you have a crash shortly before race day, and what gives their AI an edge over the competition. \n\n  In the end, only one team could take home the prize. In doing so, it set a world record for fastest autonomous driving on a racetrack. ",
    },
    {
      id: 46,
      ide:2,
      cat: "Technology",
      sp: "home-latest",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img: "https://www.malaymail.com/malaymail/uploads/images/2023/06/01/118358.jpg?v=1694598360",
      title: "Meta Quest 3: What to Expect in 2023",
      Overview:"Meta's next headset should be a lot less expensive than Apple's, and is arriving this year. Could it have an edge?",
      description: "This has been a big year for new VR headsets: the PlayStation VR 2 and Vive XR Elite are already here, and Apple's mixed reality headset should be announced in a matter of weeks. The biggest product of all of them, however, could be the Meta Quest 3.\n\n Meta's sequel to the most popular VR headset in the world right now will be a 2023 product, and Meta's Mark Zuckerberg has already confirmed it will be priced similarly to the Quest 2. That should mean it'll be a far more affordable headset than what Apple is readying. "
    },
    {
      id: 47,
      ide:3,
      cat: "Technology",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"BY LISA ",
      img: "https://vpnoverview.com/wp-content/uploads/top-3-best-cheap-vpns-of-2022-featured-image.png",
      title: "Best VPN Deals: Get Top VPNs Starting at Cheaper than $2 a Month",
      Overview:"With these discounts, you can get a top VPN like ExpressVPN, Surfshark or NordVPN at a great rate.",
      description: "With cybercrime rates on the rise, it's more important than ever to protect yourself online. You should always exercise caution when opening links and visiting unvetted websites, but for true security, you'll want to use a VPN, or virtual private network. A VPN creates an encrypted connection between your devices and the internet, which allows you to browse securely and keep your sensitive data away from prying eyes. We've tested out and rounded up some of the the best VPNs available in 2023, and now we've short-listed some of the best offers you can get right now to help you sign up with a VPN service at a low price. \n\n There are many good reasons to use a virtual private network. For example, did you know your internet service provider amasses as much data as possible on your digital activity? A 2021 Federal Trade Commission report noted that the leading ISPs have gathered user data on topics as personal as race, sexual orientation and real-time location. They've combined it, cross-referenced it and shared it with third-party partners. Yikes."
    },
    {
      id: 48,
      ide:4,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY LISA ",
      img: "https://www.cnet.com/a/img/resize/667b3a76dd0865b1a63a5fb2efdc3eff4bb2b04c/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "The Pixel 7A Raises the Bar for the Pixel 8",
      Overview:"Commentary: The Pixel 7A proves that Google needs to do more to separate its main Pixel phone from its more budget-friendly option.",
      description: "The Pixel 8 didn't make an appearance at Google's I/O conference, but the company did launch the Pixel 7A -- its budget-minded alternative to the Pixel 7. That's a win for Pixel fans, since the 7A offers many of the same benefits as the Pixel 7 -- including a great camera and the new Tensor G2 processor -- for $100 less. \n\n  But it also makes me wonder whether Google's A-series phones are beginning to overshadow its flagship Pixels. \n\n   Now that Google has narrowed the gap between the Pixel 7 and 7A, it should think more carefully about its target audience for the Pixel 8. If the Pixel 7A is for those who want a basic Pixel experience without compromising on performance and camera quality, and the Pixel 7 Pro is for photography enthusiasts, then who's the Pixel 7 for? That's the question I'm hoping Google answers with the Pixel 8, along with some other routine improvements to software support and battery life.  \n\n  Google typically releases new Pixel phones in the fall, so we're expecting to learn more about the Pixel 8 in a few months. "
    },
    {
      id: 49,
      ide:5,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY SCOTT ",
      img: "https://techcrunch.com/wp-content/uploads/2023/05/coinbaseone_emailhero_720x400px.png?w=430&h=230&crop=1",
      title: "I Tried an AR Laptop. It's Way Ahead of Its Time",
      Overview:"The Spacetop is like a Chromebook for AR headsets. With Apple's hardware looming, it also feels like a reminder of how computers could change.",
      description: "A small keyboard and trackpad lies in my lap. But there's no screen. Not that you can see, anyway. To me, I have a curved wraparound workspace with dozens of windows open. I'm seeing it on a pair of AR glasses (with prescription inserts) perched on my nose. \n\n I first tried the Spacetop in Las Vegas back in January, but the company that developed it, Sightful, is finally announcing the early-access product experiment now. I've seen tons of AR and VR headsets, but very few unique peripherals designed to work together with these future goggles and glasses. Instead of gaming or social experiences, Spacetop's main pitch is to turn laptops into AR-assisted devices with endless virtual displays. \n\n If that sounds like a weird pitch, consider that I've already lived it. I've paired Meta's Quest Pro to my laptop to extend its virtual monitors around my head, and plenty of solutions like this already exist using available apps. The interfaces can be clunky, and the hardware isn't totally made to be mobile. Spacetop's keyboard base, with its own Qualcomm processor inside, acts as a spatially tracked anchor that the AR glasses can follow and track the floating displays to. The tracking can work while in motion in a car or plane, and a button on the keyboard can make the floating displays vanish for an in-room conversation with someone, toggling the virtual screens on and off.  "
    },
  
    {
      id: 50,
      ide:6,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY DANIEL",
      img: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1461608537.jpg?w=430&h=230&crop=1",
      title: "Hearing Loss Is on the Rise. A New Wave of Tech Might Help",
      Overview:"Hearing aids are getting cheaper and more accessible.",
      description: " Between pounding jackhammers and screeching machinery, the cacophony of a construction site is unpleasant to most. Not to Christine, an 18-year-old from Alabama. After getting her first pair of hearing aids, Christine found the noises profound.\n\n 'It was surprising to stop and hear what things actually sound like to other people,' she said. 'I sat down beside a construction site just to hear the different noises. I like to listen to the machines running. My favorite is the 18-wheelers driving around the site'. \n\n  'The rumble sounds better than before.'\n\n  Christine struggled to hear out of her left ear for her whole life. In March, she was prescribed her first pair of hearing aids. In addition to dramatically improving her hearing, they also notably improved her balance. \n\n Christine is one of the 38 million Americans who have some degree of hearing loss. Hers was genetic, but many more are put at risk by exposure to loud noises. The World Health Organization estimates that over a billion young adults are at risk of hearing loss 'due to unsafe listening practices.' "
    },
    {
      id: 51,
      ide:7,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY MEARA ",
      img: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-680216789.jpg?w=430&h=230&crop=1",
      title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
      Overview:"OpenAI says an Android app is coming 'soon.'",
      description: "OpenAI continues to develop ChatGPT -- the company began rolling out plugins for the AI chatbot last month -- but has denied it's working on GPT-5 yet following an open letter signed by Elon Musk, Steve Wozniak and others at the end of March. The letter urged labs to take at least a six-month pause in artificial intelligence development due to the 'profound risks' to society.\n\n In February, Microsoft entered the AI chatbot realm with Bing AI search, which makes use of ChatGPT, and for which Microsoft earlier this week launched widgets on Android and iOS. Rival Google followed with AI Bard in March. The waitlist to try Bard has now been removed, with the service publicly available as of this week. \n\n Chinese giant Alibaba also unveiled a ChatGPT rival, with both Chinese and English capabilities, while Tesla and Twitter CEO Elon Musk has created an artificial intelligence company called X.AI. \n\n CNET has broken down the performance of ChatGPT, Bing and Google Bard to work out which AI chatbot is the most helpful. "
    },
    {
      id: 52,
      ide:8,
      cat: "Technology",
      for: "TopList", 
       date:" BY LINDSAY ",
      img: "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1338889969.jpg?w=430&h=230&crop=1",
      title: "CNET's Free Shopping Extension Saves You Time and Money. Give It a Try Today",
      Overview:"No one likes to pay full price -- and that's what the CNET Shopping extension is here to help prevent.",
      description: " Spring has sprung, and the weather is warming up across most of the country. Now's a perfect time to upgrade your outdoor gear with a new grill, maybe some patio furniture. Or maybe you just want to stay inside and splurge for a new TV. Regardless of what you're looking for, the one thing you need to be worried about is the price, and ensuring you find the best one available -- and that's where CNET Shopping comes in.\n\n  This free-to-use browser extension (which was previously known as PriceBlink) works in the background and helps find you the best price as you browse products of interest -- whether it be a coupon code or a discount at another retailer."
    },
    {
      id: 53,
      ide:9,
      cat: "Technology",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"BY EDWARD  ",
      img: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1224612965.jpg?w=430&h=230&crop=1",
      title: "AI Draws Attention at G-7 Summit, With Leaders Calling for Guideline",
      Overview:"The leaders of the Group of Seven nations say we need to develop an international, framework to achieve the common vision and goal of trustworthy AI.",
      description: " The heads of the G-7 countries -- Canada, France, Germany, Italy, Japan, the UK and the US (plus the EU) -- called for a G-7 working group to establish by the end of the year the Hiroshima AI process, for carrying out talks about how best to deal with chatbots, image generators and other AI technologies. The talks would center on developing an international framework 'to achieve the common vision and goal of trustworthy AI,' the bulletin says.\n\n 'These discussions could include topics such as governance, safeguard of intellectual property rights including copy rights, promotion of transparency, response to foreign information manipulation, including disinformation, and responsible utilization of these technologies,' the bulletin says.\n\n Though it's unclear what exactly might come of the talks, the G-7's focus on AI is another sign that people in high places are aware of the worries around the technology and are cautious about letting its development continue unfettered. The G-7's bulletin follows other recent moves by government to examine and address AI and its potential perils."
    },
    {
      id: 54,
      ide:10,
      cat: "Technology",
      for: "TopList", 
       date:" BY JAMES ",
      img: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1373749318.jpg?w=430&h=230&crop=1",
      title: "Google's AI Search Could Mean Radical Changes for Your Internet Experience",
      Overview:"At Google I/O, the company unveiled an experimental version of Search that integrates AI-generated responses. Will it break the balance of the internet?.",
      description: "The future of Google Search is a big green box. \n\n That's exactly what Google showed off this month at Google I/O, the company's yearly developer conference. The theme for 2023 was AI, a term mentioned more than 140 times during the two-hour keynote presentation. Google unveiled AI products that will actually be released to the public, an about-face for the apprehensive internet giant in response to growing competition. \n\n  Late last year, OpenAI launched ChatGPT to near-universal adulation. Suddenly, everybody had access to a generative AI engine that could seemingly answer any question with a novel response. It's powered by a large language model, or LLM, that essentially lets it act as 'autocomplete on steroids,' using massive amounts of text data to figure out what the next best word should be.  \n\n  The power and ease of ChatGPT helped it become the fastest growing consumer web platform ever. It prompted Microsoft to up its investment into OpenAI and integrate ChatGPT's tech directly into Bing search earlier this year, a move that helped the company see a 16% increase in traffic. The day before Microsoft unveiled Bing AI, Google announced its own generative AI engine, Bard, although it flubbed the launch and lost $100 billion in stock market value in the process. The stock has since rebounded to its highest level so far this year. \n\n  In many ways, Google I/O was a referendum on the company's wonky entrance into consumer AI and a clear message to skeptics (and investors) that it's willing to take radical steps to stay at the forefront of internet search, even if that means upending its core product. Google Search has long been the engine for how we all look for product information, find the latest news and otherwise interact with the internet, and for how many businesses make money. "
    },
    {
      id: 55,
      ide:11,
      cat: "Technology",
      for: "TopList", 
       date:"BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/08bdf2e50a92a72d0c091f914b295afb3e91809d/hub/2022/06/07/ef7b8ffd-9c0a-4afa-afef-2cea54ba4ace/apple-security-privacy-blue.jpg?auto=webp&fit=crop&height=362&width=644",
      title: "Download iOS 16.5 Right Now",
      Overview:"The update fixes a few security issues that might be actively exploited.",
      description: "The latest iPhone update patches almost 40 issues and bugs, Apple said in its patch notes, including three security issues that might be actively exploited. These three security issues relate to WebKit, the internet browser engine used in Safari and developed by Apple. \n\n One of these issues could disclose sensitive information to a third party, and another could allow a third party to execute commands on your device without your knowledge. Fixes for these issues are in 16.5 for anyone who missed the release of the first iPhone Rapid Security Response, iOS 16.4.1 (a). The third issue could allow a third party access to more information across your device than is allowed.\n\n The iOS update also patches an issue where someone could access your contacts from your lock screen. While Apple has provided ways to customize your lock screen, some people have run into issues where the lock screen can allow others to access some iPhone features, like replying to messages and even your Wallet."
    },



  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {/* <Home/> */}
      {props.children}
    </AppData.Provider>
  );
}

export default Store;
