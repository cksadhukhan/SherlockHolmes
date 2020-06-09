import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component{
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.storyTitle}>The Adventures of Sherlock Holmes</Text>
                <Text style={styles.storyAuthor}>by Sir Arthur Conan Doyle</Text>
                <Text style={styles.storyName}>Adventure 1: "A Scandal in Bohemia"</Text>
                <Text style={styles.storyLine}>I.</Text>
                <Text style={styles.story}>
                To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.{'\n'}{'\n'}

                I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of his own keen nature. He was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries which had been abandoned as hopeless by the official police. From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion.{'\n'}{'\n'}

                One night—it was on the twentieth of March, 1888—I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to know how he was employing his extraordinary powers. His rooms were brilliantly lit, and, even as I looked up, I saw his tall, spare figure pass twice in a dark silhouette against the blind. He was pacing the room swiftly, eagerly, with his head sunk upon his chest and his hands clasped behind him. To me, who knew his every mood and habit, his attitude and manner told their own story. He was at work again. He had risen out of his drug-created dreams and was hot upon the scent of some new problem. I rang the bell and was shown up to the chamber which had formerly been in part my own.{'\n'}{'\n'}

                His manner was not effusive. It seldom was; but he was glad, I think, to see me. With hardly a word spoken, but with a kindly eye, he waved me to an armchair, threw across his case of cigars, and indicated a spirit case and a gasogene in the corner. Then he stood before the fire and looked me over in his singular introspective fashion.{'\n'}{'\n'}

                “Wedlock suits you,” he remarked. “I think, Watson, that you have put on seven and a half pounds since I saw you.”{'\n'}{'\n'}

                “Seven!” I answered.{'\n'}{'\n'}

                “Indeed, I should have thought a little more. Just a trifle more, I fancy, Watson. And in practice again, I observe. You did not tell me that you intended to go into harness.”{'\n'}{'\n'}

                “Then, how do you know?”{'\n'}{'\n'}

                “I see it, I deduce it. How do I know that you have been getting yourself very wet lately, and that you have a most clumsy and careless servant girl?”{'\n'}{'\n'}

                “My dear Holmes,” said I, “this is too much. You would certainly have been burned, had you lived a few centuries ago. It is true that I had a country walk on Thursday and came home in a dreadful mess, but as I have changed my clothes I can’t imagine how you deduce it. As to Mary Jane, she is incorrigible, and my wife has given her notice, but there, again, I fail to see how you work it out.”{'\n'}{'\n'}

                He chuckled to himself and rubbed his long, nervous hands together.{'\n'}{'\n'}

                “It is simplicity itself,” said he; “my eyes tell me that on the inside of your left shoe, just where the firelight strikes it, the leather is scored by six almost parallel cuts. Obviously they have been caused by someone who has very carelessly scraped round the edges of the sole in order to remove crusted mud from it. Hence, you see, my double deduction that you had been out in vile weather, and that you had a particularly malignant boot-slitting specimen of the London slavey. As to your practice, if a gentleman walks into my rooms smelling of iodoform, with a black mark of nitrate of silver upon his right forefinger, and a bulge on the right side of his top-hat to show where he has secreted his stethoscope, I must be dull, indeed, if I do not pronounce him to be an active member of the medical profession.”{'\n'}{'\n'}

                I could not help laughing at the ease with which he explained his process of deduction. “When I hear you give your reasons,” I remarked, “the thing always appears to me to be so ridiculously simple that I could easily do it myself, though at each successive instance of your reasoning I am baffled until you explain your process. And yet I believe that my eyes are as good as yours.”{'\n'}{'\n'}

                “Quite so,” he answered, lighting a cigarette, and throwing himself down into an armchair. “You see, but you do not observe. The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room.”{'\n'}{'\n'}

                “Frequently.”{'\n'}{'\n'}

                “How often?”{'\n'}{'\n'}

                “Well, some hundreds of times.”{'\n'}{'\n'}

                “Then how many are there?”{'\n'}{'\n'}

                “How many? I don’t know.”{'\n'}{'\n'}

                “Quite so! You have not observed. And yet you have seen. That is just my point. Now, I know that there are seventeen steps, because I have both seen and observed. By-the-way, since you are interested in these little problems, and since you are good enough to chronicle one or two of my trifling experiences, you may be interested in this.” He threw over a sheet of thick, pink-tinted note-paper which had been lying open upon the table. “It came by the last post,” said he. “Read it aloud.”{'\n'}{'\n'}

                The note was undated, and without either signature or address.{'\n'}{'\n'}

                “There will call upon you to-night, at a quarter to eight o’clock,” it said, “a gentleman who desires to consult you upon a matter of the very deepest moment. Your recent services to one of the royal houses of Europe have shown that you are one who may safely be trusted with matters which are of an importance which can hardly be exaggerated. This account of you we have from all quarters received. Be in your chamber then at that hour, and do not take it amiss if your visitor wear a mask.”{'\n'}{'\n'}

                “This is indeed a mystery,” I remarked. “What do you imagine that it means?”{'\n'}{'\n'}

                “I have no data yet. It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts. But the note itself. What do you deduce from it?”{'\n'}{'\n'}

                I carefully examined the writing, and the paper upon which it was written.{'\n'}{'\n'}

                “The man who wrote it was presumably well to do,” I remarked, endeavouring to imitate my companion’s processes. “Such paper could not be bought under half a crown a packet. It is peculiarly strong and stiff.”{'\n'}{'\n'}

                “Peculiar—that is the very word,” said Holmes. “It is not an English paper at all. Hold it up to the light.”{'\n'}{'\n'}

                I did so, and saw a large “E” with a small “g,” a “P,” and a large “G” with a small “t” woven into the texture of the paper.{'\n'}{'\n'}

                “What do you make of that?” asked Holmes.{'\n'}{'\n'}

                “The name of the maker, no doubt; or his monogram, rather.”{'\n'}{'\n'}

                “Not at all. The ‘G’ with the small ‘t’ stands for ‘Gesellschaft,’ which is the German for ‘Company.’ It is a customary contraction like our ‘Co.’ ‘P,’ of course, stands for ‘Papier.’ Now for the ‘Eg.’ Let us glance at our Continental Gazetteer.” He took down a heavy brown volume from his shelves. “Eglow, Eglonitz—here we are, Egria. It is in a German-speaking country—in Bohemia, not far from Carlsbad. ‘Remarkable as being the scene of the death of Wallenstein, and for its numerous glass-factories and paper-mills.’ Ha, ha, my boy, what do you make of that?” His eyes sparkled, and he sent up a great blue triumphant cloud from his cigarette.{'\n'}{'\n'}

                “The paper was made in Bohemia,” I said.{'\n'}{'\n'}

                “Precisely. And the man who wrote the note is a German. Do you note the peculiar construction of the sentence—‘This account of you we have from all quarters received.’ A Frenchman or Russian could not have written that. It is the German who is so uncourteous to his verbs. It only remains, therefore, to discover what is wanted by this German who writes upon Bohemian paper and prefers wearing a mask to showing his face. And here he comes, if I am not mistaken, to resolve all our doubts.”{'\n'}{'\n'}

                As he spoke there was the sharp sound of horses’ hoofs and grating wheels against the curb, followed by a sharp pull at the bell. Holmes whistled.{'\n'}{'\n'}

                “A pair, by the sound,” said he. “Yes,” he continued, glancing out of the window. “A nice little brougham and a pair of beauties. A hundred and fifty guineas apiece. There’s money in this case, Watson, if there is nothing else.”{'\n'}{'\n'}

                “I think that I had better go, Holmes.”{'\n'}{'\n'}

                “Not a bit, Doctor. Stay where you are. I am lost without my Boswell. And this promises to be interesting. It would be a pity to miss it.”{'\n'}{'\n'}

                “But your client—”{'\n'}{'\n'}

                “Never mind him. I may want your help, and so may he. Here he comes. Sit down in that armchair, Doctor, and give us your best attention.”{'\n'}{'\n'}

                A slow and heavy step, which had been heard upon the stairs and in the passage, paused immediately outside the door. Then there was a loud and authoritative tap.{'\n'}{'\n'}

                “Come in!” said Holmes.{'\n'}{'\n'}

                A man entered who could hardly have been less than six feet six inches in height, with the chest and limbs of a Hercules. His dress was rich with a richness which would, in England, be looked upon as akin to bad taste. Heavy bands of astrakhan were slashed across the sleeves and fronts of his double-breasted coat, while the deep blue cloak which was thrown over his shoulders was lined with flame-coloured silk and secured at the neck with a brooch which consisted of a single flaming beryl. Boots which extended halfway up his calves, and which were trimmed at the tops with rich brown fur, completed the impression of barbaric opulence which was suggested by his whole appearance. He carried a broad-brimmed hat in his hand, while he wore across the upper part of his face, extending down past the cheekbones, a black vizard mask, which he had apparently adjusted that very moment, for his hand was still raised to it as he entered. From the lower part of the face he appeared to be a man of strong character, with a thick, hanging lip, and a long, straight chin suggestive of resolution pushed to the length of obstinacy.{'\n'}{'\n'}

                “You had my note?” he asked with a deep harsh voice and a strongly marked German accent. “I told you that I would call.” He looked from one to the other of us, as if uncertain which to address.{'\n'}{'\n'}

                “Pray take a seat,” said Holmes. “This is my friend and colleague, Dr. Watson, who is occasionally good enough to help me in my cases. Whom have I the honour to address?”{'\n'}{'\n'}

                “You may address me as the Count Von Kramm, a Bohemian nobleman. I understand that this gentleman, your friend, is a man of honour and discretion, whom I may trust with a matter of the most extreme importance. If not, I should much prefer to communicate with you alone.”{'\n'}{'\n'}

                I rose to go, but Holmes caught me by the wrist and pushed me back into my chair. “It is both, or none,” said he. “You may say before this gentleman anything which you may say to me.”{'\n'}{'\n'}

                The Count shrugged his broad shoulders. “Then I must begin,” said he, “by binding you both to absolute secrecy for two years; at the end of that time the matter will be of no importance. At present it is not too much to say that it is of such weight it may have an influence upon European history.”{'\n'}{'\n'}

                “I promise,” said Holmes.{'\n'}{'\n'}

                “And I.”{'\n'}{'\n'}

                “You will excuse this mask,” continued our strange visitor. “The august person who employs me wishes his agent to be to you, and I may confess at once that the title by which I have just called myself is not exactly my own.”{'\n'}{'\n'}

                “I was aware of it,” said Holmes dryly.{'\n'}{'\n'}

                “The circumstances are of great delicacy, and every precaution has to be taken to quench what might grow to be an immense scandal and seriously compromise one of the reigning families of Europe. To speak plainly, the matter implicates the great House of Ormstein, hereditary kings of Bohemia.”{'\n'}{'\n'}

                “I was also aware of that,” murmured Holmes, settling himself down in his armchair and closing his eyes.{'\n'}{'\n'}

                Our visitor glanced with some apparent surprise at the languid, lounging figure of the man who had been no doubt depicted to him as the most incisive reasoner and most energetic agent in Europe. Holmes slowly reopened his eyes and looked impatiently at his gigantic client.{'\n'}{'\n'}

                “If your Majesty would condescend to state your case,” he remarked, “I should be better able to advise you.”{'\n'}{'\n'}

                The man sprang from his chair and paced up and down the room in uncontrollable agitation. Then, with a gesture of desperation, he tore the mask from his face and hurled it upon the ground. “You are right,” he cried; “I am the King. Why should I attempt to conceal it?”{'\n'}{'\n'}

                “Why, indeed?” murmured Holmes. “Your Majesty had not spoken before I was aware that I was addressing Wilhelm Gottsreich Sigismond von Ormstein, Grand Duke of Cassel-Felstein, and hereditary King of Bohemia.”{'\n'}{'\n'}

                “But you can understand,” said our strange visitor, sitting down once more and passing his hand over his high white forehead, “you can understand that I am not accustomed to doing such business in my own person. Yet the matter was so delicate that I could not confide it to an agent without putting myself in his power. I have come incognito from Prague for the purpose of consulting you.”{'\n'}{'\n'}

                “Then, pray consult,” said Holmes, shutting his eyes once more.{'\n'}{'\n'}

                “The facts are briefly these: Some five years ago, during a lengthy visit to Warsaw, I made the acquaintance of the well-known adventuress, Irene Adler. The name is no doubt familiar to you.”{'\n'}{'\n'}

                “Kindly look her up in my index, Doctor,” murmured Holmes without opening his eyes. For many years he had adopted a system of docketing all paragraphs concerning men and things, so that it was difficult to name a subject or a person on which he could not at once furnish information. In this case I found her biography sandwiched in between that of a Hebrew rabbi and that of a staff-commander who had written a monograph upon the deep-sea fishes.{'\n'}{'\n'}

                “Let me see!” said Holmes. “Hum! Born in New Jersey in the year 1858. Contralto—hum! La Scala, hum! Prima donna Imperial Opera of Warsaw—yes! Retired from operatic stage—ha! Living in London—quite so! Your Majesty, as I understand, became entangled with this young person, wrote her some compromising letters, and is now desirous of getting those letters back.”{'\n'}{'\n'}

                “Precisely so. But how—”{'\n'}{'\n'}

                “Was there a secret marriage?”{'\n'}{'\n'}

                “None.”{'\n'}{'\n'}

                “No legal papers or certificates?”{'\n'}{'\n'}

                “None.”{'\n'}{'\n'}

                “Then I fail to follow your Majesty. If this young person should produce her letters for blackmailing or other purposes, how is she to prove their authenticity?”{'\n'}{'\n'}

                “There is the writing.”{'\n'}{'\n'}

                “Pooh, pooh! Forgery.”{'\n'}{'\n'}

                “My private note-paper.”{'\n'}{'\n'}

                “Stolen.”{'\n'}{'\n'}

                “My own seal.”{'\n'}{'\n'}

                “Imitated.”{'\n'}{'\n'}

                “My photograph.”{'\n'}{'\n'}

                “Bought.”{'\n'}{'\n'}

                “We were both in the photograph.”{'\n'}{'\n'}

                “Oh, dear! That is very bad! Your Majesty has indeed committed an indiscretion.”{'\n'}{'\n'}

                “I was mad—insane.”{'\n'}{'\n'}

                “You have compromised yourself seriously.”{'\n'}{'\n'}

                “I was only Crown Prince then. I was young. I am but thirty now.”{'\n'}{'\n'}

                “It must be recovered.”{'\n'}{'\n'}

                “We have tried and failed.”{'\n'}{'\n'}

                “Your Majesty must pay. It must be bought.”{'\n'}{'\n'}

                “She will not sell.”{'\n'}{'\n'}

                “Stolen, then.”{'\n'}{'\n'}

                “Five attempts have been made. Twice burglars in my pay ransacked her house. Once we diverted her luggage when she travelled. Twice she has been waylaid. There has been no result.”{'\n'}{'\n'}

                “No sign of it?”{'\n'}{'\n'}

                “Absolutely none.”{'\n'}{'\n'}

                Holmes laughed. “It is quite a pretty little problem,” said he.{'\n'}{'\n'}

                “But a very serious one to me,” returned the King reproachfully.{'\n'}{'\n'}

                “Very, indeed. And what does she propose to do with the photograph?”{'\n'}{'\n'}

                “To ruin me.”{'\n'}{'\n'}

                “But how?”{'\n'}{'\n'}

                “I am about to be married.”{'\n'}{'\n'}

                “So I have heard.”{'\n'}{'\n'}

                “To Clotilde Lothman von Saxe-Meningen, second daughter of the King of Scandinavia. You may know the strict principles of her family. She is herself the very soul of delicacy. A shadow of a doubt as to my conduct would bring the matter to an end.”{'\n'}{'\n'}

                “And Irene Adler?”{'\n'}{'\n'}

                “Threatens to send them the photograph. And she will do it. I know that she will do it. You do not know her, but she has a soul of steel. She has the face of the most beautiful of women, and the mind of the most resolute of men. Rather than I should marry another woman, there are no lengths to which she would not go—none.”{'\n'}{'\n'}

                “You are sure that she has not sent it yet?”{'\n'}{'\n'}

                “I am sure.”{'\n'}{'\n'}

                “And why?”{'\n'}{'\n'}

                “Because she has said that she would send it on the day when the betrothal was publicly proclaimed. That will be next Monday.”{'\n'}{'\n'}

                “Oh, then we have three days yet,” said Holmes with a yawn. “That is very fortunate, as I have one or two matters of importance to look into just at present. Your Majesty will, of course, stay in London for the present?”{'\n'}{'\n'}

                “Certainly. You will find me at the Langham under the name of the Count Von Kramm.”{'\n'}{'\n'}

                “Then I shall drop you a line to let you know how we progress.”{'\n'}{'\n'}

                “Pray do so. I shall be all anxiety.”{'\n'}{'\n'}

                “Then, as to money?”{'\n'}{'\n'}

                “You have carte blanche.”{'\n'}{'\n'}

                “Absolutely?”
                the King of Bohemia talking to Holmes and watson in their study{'\n'}{'\n'}

                “I tell you that I would give one of the provinces of my kingdom to have that photograph.”{'\n'}{'\n'}

                “And for present expenses?”{'\n'}{'\n'}

                The King took a heavy chamois leather bag from under his cloak and laid it on the table.{'\n'}{'\n'}

                “There are three hundred pounds in gold and seven hundred in notes,” he said.{'\n'}{'\n'}

                Holmes scribbled a receipt upon a sheet of his note-book and handed it to him.{'\n'}{'\n'}

                “And Mademoiselle’s address?” he asked.{'\n'}{'\n'}

                “Is Briony Lodge, Serpentine Avenue, St. John’s Wood.”{'\n'}{'\n'}

                Holmes took a note of it. “One other question,” said he. “Was the photograph a cabinet?”{'\n'}{'\n'}

                “It was.”{'\n'}{'\n'}

                “Then, good-night, your Majesty, and I trust that we shall soon have some good news for you. And good-night, Watson,” he added, as the wheels of the royal brougham rolled down the street. “If you will be good enough to call to-morrow afternoon at three o’clock I should like to chat this little matter over with you.”{'\n'}{'\n'}
                </Text>

                <Text style={styles.storyLine}>II.</Text>
                <Text style={styles.story}>
                At three o’clock precisely I was at Baker Street, but Holmes had not yet returned. The landlady informed me that he had left the house shortly after eight o’clock in the morning. I sat down beside the fire, however, with the intention of awaiting him, however long he might be. I was already deeply interested in his inquiry, for, though it was surrounded by none of the grim and strange features which were associated with the two crimes which I have already recorded, still, the nature of the case and the exalted station of his client gave it a character of its own. Indeed, apart from the nature of the investigation which my friend had on hand, there was something in his masterly grasp of a situation, and his keen, incisive reasoning, which made it a pleasure to me to study his system of work, and to follow the quick, subtle methods by which he disentangled the most inextricable mysteries. So accustomed was I to his invariable success that the very possibility of his failing had ceased to enter into my head.{'\n'}{'\n'}

                It was close upon four before the door opened, and a drunken-looking groom, ill-kempt and side-whiskered, with an inflamed face and disreputable clothes, walked into the room. Accustomed as I was to my friend’s amazing powers in the use of disguises, I had to look three times before I was certain that it was indeed he. With a nod he vanished into the bedroom, whence he emerged in five minutes tweed-suited and respectable, as of old. Putting his hands into his pockets, he stretched out his legs in front of the fire and laughed heartily for some minutes.{'\n'}{'\n'}

                “Well, really!” he cried, and then he choked and laughed again until he was obliged to lie back, limp and helpless, in the chair.{'\n'}{'\n'}

                “What is it?”{'\n'}{'\n'}

                “It’s quite too funny. I am sure you could never guess how I employed my morning, or what I ended by doing.”{'\n'}{'\n'}

                “I can’t imagine. I suppose that you have been watching the habits, and perhaps the house, of Miss Irene Adler.”{'\n'}{'\n'}

                “Quite so; but the sequel was rather unusual. I will tell you, however. I left the house a little after eight o’clock this morning in the character of a groom out of work. There is a wonderful sympathy and freemasonry among horsey men. Be one of them, and you will know all that there is to know. I soon found Briony Lodge. It is a bijou villa, with a garden at the back, but built out in front right up to the road, two stories. Chubb lock to the door. Large sitting-room on the right side, well furnished, with long windows almost to the floor, and those preposterous English window fasteners which a child could open. Behind there was nothing remarkable, save that the passage window could be reached from the top of the coach-house. I walked round it and examined it closely from every point of view, but without noting anything else of interest.{'\n'}{'\n'}

                “I then lounged down the street and found, as I expected, that there was a mews in a lane which runs down by one wall of the garden. I lent the ostlers a hand in rubbing down their horses, and received in exchange twopence, a glass of half and half, two fills of shag tobacco, and as much information as I could desire about Miss Adler, to say nothing of half a dozen other people in the neighbourhood in whom I was not in the least interested, but whose biographies I was compelled to listen to.”{'\n'}{'\n'}

                “And what of Irene Adler?” I asked.{'\n'}{'\n'}

                “Oh, she has turned all the men’s heads down in that part. She is the daintiest thing under a bonnet on this planet. So say the Serpentine-mews, to a man. She lives quietly, sings at concerts, drives out at five every day, and returns at seven sharp for dinner. Seldom goes out at other times, except when she sings. Has only one male visitor, but a good deal of him. He is dark, handsome, and dashing, never calls less than once a day, and often twice. He is a Mr. Godfrey Norton, of the Inner Temple. See the advantages of a cabman as a confidant. They had driven him home a dozen times from Serpentine-mews, and knew all about him. When I had listened to all they had to tell, I began to walk up and down near Briony Lodge once more, and to think over my plan of campaign.{'\n'}{'\n'}

                “This Godfrey Norton was evidently an important factor in the matter. He was a lawyer. That sounded ominous. What was the relation between them, and what the object of his repeated visits? Was she his client, his friend, or his mistress? If the former, she had probably transferred the photograph to his keeping. If the latter, it was less likely. On the issue of this question depended whether I should continue my work at Briony Lodge, or turn my attention to the gentleman’s chambers in the Temple. It was a delicate point, and it widened the field of my inquiry. I fear that I bore you with these details, but I have to let you see my little difficulties, if you are to understand the situation.”{'\n'}{'\n'}

                “I am following you closely,” I answered.{'\n'}{'\n'}

                “I was still balancing the matter in my mind when a hansom cab drove up to Briony Lodge, and a gentleman sprang out. He was a remarkably handsome man, dark, aquiline, and moustached—evidently the man of whom I had heard. He appeared to be in a great hurry, shouted to the cabman to wait, and brushed past the maid who opened the door with the air of a man who was thoroughly at home.{'\n'}{'\n'}

                “He was in the house about half an hour, and I could catch glimpses of him in the windows of the sitting-room, pacing up and down, talking excitedly, and waving his arms. Of her I could see nothing. Presently he emerged, looking even more flurried than before. As he stepped up to the cab, he pulled a gold watch from his pocket and looked at it earnestly, ‘Drive like the devil,’ he shouted, ‘first to Gross & Hankey’s in Regent Street, and then to the Church of St. Monica in the Edgeware Road. Half a guinea if you do it in twenty minutes!’{'\n'}{'\n'}

                “Away they went, and I was just wondering whether I should not do well to follow them when up the lane came a neat little landau, the coachman with his coat only half-buttoned, and his tie under his ear, while all the tags of his harness were sticking out of the buckles. It hadn’t pulled up before she shot out of the hall door and into it. I only caught a glimpse of her at the moment, but she was a lovely woman, with a face that a man might die for.{'\n'}{'\n'}

                “‘The Church of St. Monica, John,’ she cried, ‘and half a sovereign if you reach it in twenty minutes.’{'\n'}{'\n'}

                “This was quite too good to lose, Watson. I was just balancing whether I should run for it, or whether I should perch behind her landau when a cab came through the street. The driver looked twice at such a shabby fare, but I jumped in before he could object. ‘The Church of St. Monica,’ said I, ‘and half a sovereign if you reach it in twenty minutes.’ It was twenty-five minutes to twelve, and of course it was clear enough what was in the wind.{'\n'}{'\n'}

                “My cabby drove fast. I don’t think I ever drove faster, but the others were there before us. The cab and the landau with their steaming horses were in front of the door when I arrived. I paid the man and hurried into the church. There was not a soul there save the two whom I had followed and a surpliced clergyman, who seemed to be expostulating with them. They were all three standing in a knot in front of the altar. I lounged up the side aisle like any other idler who has dropped into a church. Suddenly, to my surprise, the three at the altar faced round to me, and Godfrey Norton came running as hard as he could towards me.{'\n'}{'\n'}

                “‘’ he cried. ‘You’ll do. Come! Come!’{'\n'}{'\n'}

                “‘What then?’ I asked.{'\n'}{'\n'}

                “‘Come, man, come, only three minutes, or it won’t be legal.’{'\n'}{'\n'}

                “I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.”{'\n'}{'\n'}

                “This is a very unexpected turn of affairs,” said I; “and what then?”{'\n'}{'\n'}

                “Well, I found my plans very seriously menaced. It looked as if the pair might take an immediate departure, and so necessitate very prompt and energetic measures on my part. At the church door, however, they separated, he driving back to the Temple, and she to her own house. ‘I shall drive out in the park at five as usual,’ she said as she left him. I heard no more. They drove away in different directions, and I went off to make my own arrangements.”{'\n'}{'\n'}

                “Which are?”{'\n'}{'\n'}

                “Some cold beef and a glass of beer,” he answered, ringing the bell. “I have been too busy to think of food, and I am likely to be busier still this evening. By the way, Doctor, I shall want your co-operation.”{'\n'}{'\n'}

                “I shall be delighted.”{'\n'}{'\n'}

                “You don’t mind breaking the law?”{'\n'}{'\n'}

                “Not in the least.”{'\n'}{'\n'}

                “Nor running a chance of arrest?”{'\n'}{'\n'}

                “Not in a good cause.”{'\n'}{'\n'}

                “Oh, the cause is excellent!”{'\n'}{'\n'}

                “Then I am your man.”{'\n'}{'\n'}

                “I was sure that I might rely on you.”{'\n'}{'\n'}

                “But what is it you wish?”{'\n'}{'\n'}

                “When Mrs. Turner has brought in the tray I will make it clear to you. Now,” he said as he turned hungrily on the simple fare that our landlady had provided, “I must discuss it while I eat, for I have not much time. It is nearly five now. In two hours we must be on the scene of action. Miss Irene, or Madame, rather, returns from her drive at seven. We must be at Briony Lodge to meet her.”{'\n'}{'\n'}

                “And what then?”{'\n'}{'\n'}

                “You must leave that to me. I have already arranged what is to occur. There is only one point on which I must insist. You must not interfere, come what may. You understand?”{'\n'}{'\n'}

                “I am to be neutral?”{'\n'}{'\n'}

                “To do nothing whatever. There will probably be some small unpleasantness. Do not join in it. It will end in my being conveyed into the house. Four or five minutes afterwards the sitting-room window will open. You are to station yourself close to that open window.”{'\n'}{'\n'}

                “Yes.”{'\n'}{'\n'}

                “You are to watch me, for I will be visible to you.”{'\n'}{'\n'}

                “Yes.”{'\n'}{'\n'}

                “And when I raise my hand—so—you will throw into the room what I give you to throw, and will, at the same time, raise the cry of fire. You quite follow me?”{'\n'}{'\n'}

                “Entirely.”{'\n'}{'\n'}

                “It is nothing very formidable,” he said, taking a long cigar-shaped roll from his pocket. “It is an ordinary plumber’s smoke-rocket, fitted with a cap at either end to make it self-lighting. Your task is confined to that. When you raise your cry of fire, it will be taken up by quite a number of people. You may then walk to the end of the street, and I will rejoin you in ten minutes. I hope that I have made myself clear?”{'\n'}{'\n'}

                “I am to remain neutral, to get near the window, to watch you, and at the signal to throw in this object, then to raise the cry of fire, and to wait you at the corner of the street.”{'\n'}{'\n'}

                “Precisely.”{'\n'}{'\n'}

                “Then you may entirely rely on me.”{'\n'}{'\n'}

                “That is excellent. I think, perhaps, it is almost time that I prepare for the new role I have to play.”{'\n'}{'\n'}

                He disappeared into his bedroom and returned in a few minutes in the character of an amiable and simple-minded Nonconformist clergyman. His broad black hat, his baggy trousers, his white tie, his sympathetic smile, and general look of peering and benevolent curiosity were such as Mr. John Hare alone could have equalled. It was not merely that Holmes changed his costume. His expression, his manner, his very soul seemed to vary with every fresh part that he assumed. The stage lost a fine actor, even as science lost an acute reasoner, when he became a specialist in crime.{'\n'}{'\n'}

                It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes’ succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated. There was a group of shabbily dressed men smoking and laughing in a corner, a scissors-grinder with his wheel, two guardsmen who were flirting with a nurse-girl, and several well-dressed young men who were lounging up and down with cigars in their mouths.{'\n'}{'\n'}

                “You see,” remarked Holmes, as we paced to and fro in front of the house, “this marriage rather simplifies matters. The photograph becomes a double-edged weapon now. The chances are that she would be as averse to its being seen by Mr. Godfrey Norton, as our client is to its coming to the eyes of his princess. Now the question is, Where are we to find the photograph?”{'\n'}{'\n'}

                “Where, indeed?”{'\n'}{'\n'}

                “It is most unlikely that she carries it about with her. It is cabinet size. Too large for easy concealment about a woman’s dress. She knows that the King is capable of having her waylaid and searched. Two attempts of the sort have already been made. We may take it, then, that she does not carry it about with her.”{'\n'}{'\n'}

                “Where, then?”{'\n'}{'\n'}

                “Her banker or her lawyer. There is that double possibility. But I am inclined to think neither. Women are naturally secretive, and they like to do their own secreting. Why should she hand it over to anyone else? She could trust her own guardianship, but she could not tell what indirect or political influence might be brought to bear upon a business man. Besides, remember that she had resolved to use it within a few days. It must be where she can lay her hands upon it. It must be in her own house.”{'\n'}{'\n'}

                “But it has twice been burgled.”{'\n'}{'\n'}

                “Pshaw! They did not know how to look.”{'\n'}{'\n'}

                “But how will you look?”{'\n'}{'\n'}

                “I will not look.”{'\n'}{'\n'}

                “What then?”{'\n'}{'\n'}

                “I will get her to show me.”{'\n'}{'\n'}

                “But she will refuse.”{'\n'}{'\n'}

                “She will not be able to. But I hear the rumble of wheels. It is her carriage. Now carry out my orders to the letter.”{'\n'}{'\n'}

                As he spoke the gleam of the side-lights of a carriage came round the curve of the avenue. It was a smart little landau which rattled up to the door of Briony Lodge. As it pulled up, one of the loafing men at the corner dashed forward to open the door in the hope of earning a copper, but was elbowed away by another loafer, who had rushed up with the same intention. A fierce quarrel broke out, which was increased by the two guardsmen, who took sides with one of the loungers, and by the scissors-grinder, who was equally hot upon the other side. A blow was struck, and in an instant the lady, who had stepped from her carriage, was the centre of a little knot of flushed and struggling men, who struck savagely at each other with their fists and sticks. Holmes dashed into the crowd to protect the lady; but just as he reached her he gave a cry and dropped to the ground, with the blood running freely down his face. At his fall the guardsmen took to their heels in one direction and the loungers in the other, while a number of better-dressed people, who had watched the scuffle without taking part in it, crowded in to help the lady and to attend to the injured man. Irene Adler, as I will still call her, had hurried up the steps; but she stood at the top with her superb figure outlined against the lights of the hall, looking back into the street.{'\n'}{'\n'}
                “Is the poor gentleman much hurt?” she asked.{'\n'}{'\n'}

                “He is dead,” cried several voices.{'\n'}{'\n'}

                “No, no, there’s life in him!” shouted another. “But he’ll be gone before you can get him to hospital.”{'\n'}{'\n'}

                “He’s a brave fellow,” said a woman. “They would have had the lady’s purse and watch if it hadn’t been for him. They were a gang, and a rough one, too. Ah, he’s breathing now.”{'\n'}{'\n'}

                “He can’t lie in the street. May we bring him in, marm?”{'\n'}{'\n'}

                “Surely. Bring him into the sitting-room. There is a comfortable sofa. This way, please!”{'\n'}{'\n'}

                Slowly and solemnly he was borne into Briony Lodge and laid out in the principal room, while I still observed the proceedings from my post by the window. The lamps had been lit, but the blinds had not been drawn, so that I could see Holmes as he lay upon the couch. I do not know whether he was seized with compunction at that moment for the part he was playing, but I know that I never felt more heartily ashamed of myself in my life than when I saw the beautiful creature against whom I was conspiring, or the grace and kindliness with which she waited upon the injured man. And yet it would be the blackest treachery to Holmes to draw back now from the part which he had intrusted to me. I hardened my heart, and took the smoke-rocket from under my ulster. After all, I thought, we are not injuring her. We are but preventing her from injuring another.{'\n'}{'\n'}

                Holmes had sat up upon the couch, and I saw him motion like a man who is in need of air. A maid rushed across and threw open the window. At the same instant I saw him raise his hand and at the signal I tossed my rocket into the room with a cry of “Fire!” The word was no sooner out of my mouth than the whole crowd of spectators, well dressed and ill—gentlemen, ostlers, and servant-maids—joined in a general shriek of “Fire!” Thick clouds of smoke curled through the room and out at the open window. I caught a glimpse of rushing figures, and a moment later the voice of Holmes from within assuring them that it was a false alarm. Slipping through the shouting crowd I made my way to the corner of the street, and in ten minutes was rejoiced to find my friend’s arm in mine, and to get away from the scene of uproar. He walked swiftly and in silence for some few minutes until we had turned down one of the quiet streets which lead towards the Edgeware Road.{'\n'}{'\n'}

                “You did it very nicely, Doctor,” he remarked. “Nothing could have been better. It is all right.”{'\n'}{'\n'}

                “You have the photograph?”{'\n'}{'\n'}

                “I know where it is.”{'\n'}{'\n'}

                “And how did you find out?”{'\n'}{'\n'}

                “She showed me, as I told you she would.”{'\n'}{'\n'}

                “I am still in the dark.”{'\n'}{'\n'}

                “I do not wish to make a mystery,” said he, laughing. “The matter was perfectly simple. You, of course, saw that everyone in the street was an accomplice. They were all engaged for the evening.”{'\n'}{'\n'}

                “I guessed as much.”{'\n'}{'\n'}

                “Then, when the row broke out, I had a little moist red paint in the palm of my hand. I rushed forward, fell down, clapped my hand to my face, and became a piteous spectacle. It is an old trick.”{'\n'}{'\n'}

                “That also I could fathom.”{'\n'}{'\n'}

                “Then they carried me in. She was bound to have me in. What else could she do? And into her sitting-room, which was the very room which I suspected. It lay between that and her bedroom, and I was determined to see which. They laid me on a couch, I motioned for air, they were compelled to open the window, and you had your chance.”{'\n'}{'\n'}

                “How did that help you?”{'\n'}{'\n'}

                “It was all-important. When a woman thinks that her house is on fire, her instinct is at once to rush to the thing which she values most. It is a perfectly overpowering impulse, and I have more than once taken advantage of it. In the case of the Darlington substitution scandal it was of use to me, and also in the Arnsworth Castle business. A married woman grabs at her baby; an unmarried one reaches for her jewel-box. Now it was clear to me that our lady of to-day had nothing in the house more precious to her than what we are in quest of. She would rush to secure it. The alarm of fire was admirably done. The smoke and shouting were enough to shake nerves of steel. She responded beautifully. The photograph is in a recess behind a sliding panel just above the right bell-pull. She was there in an instant, and I caught a glimpse of it as she half-drew it out. When I cried out that it was a false alarm, she replaced it, glanced at the rocket, rushed from the room, and I have not seen her since. I rose, and, making my excuses, escaped from the house. I hesitated whether to attempt to secure the photograph at once; but the coachman had come in, and as he was watching me narrowly it seemed safer to wait. A little over-precipitance may ruin all.”{'\n'}{'\n'}

                “And now?” I asked.{'\n'}{'\n'}

                “Our quest is practically finished. I shall call with the King to-morrow, and with you, if you care to come with us. We will be shown into the sitting-room to wait for the lady, but it is probable that when she comes she may find neither us nor the photograph. It might be a satisfaction to his Majesty to regain it with his own hands.”{'\n'}{'\n'}

                “And when will you call?”{'\n'}{'\n'}

                “At eight in the morning. She will not be up, so that we shall have a clear field. Besides, we must be prompt, for this marriage may mean a complete change in her life and habits. I must wire to the King without delay.”{'\n'}{'\n'}

                We had reached Baker Street and had stopped at the door. He was searching his pockets for the key when someone passing said:{'\n'}

                “Good-night, Mister Sherlock Holmes.”{'\n'}{'\n'}

                There were several people on the pavement at the time, but the greeting appeared to come from a slim youth in an ulster who had hurried by.{'\n'}{'\n'}

                “I’ve heard that voice before,” said Holmes, staring down the dimly lit street. “Now, I wonder who the deuce that could have been.”{'\n'}{'\n'}
                </Text>
                <Text style={styles.storyLine}>III.</Text>
                <Text style={styles.story}>
                I slept at Baker Street that night, and we were engaged upon our toast and coffee in the morning when the King of Bohemia rushed into the room.{'\n'}{'\n'}

                “You have really got it!” he cried, grasping Sherlock Holmes by either shoulder and looking eagerly into his face.{'\n'}{'\n'}

                “Not yet.”{'\n'}{'\n'}

                “But you have hopes?”{'\n'}{'\n'}

                “I have hopes.”{'\n'}{'\n'}

                “Then, come. I am all impatience to be gone.”{'\n'}{'\n'}

                “We must have a cab.”{'\n'}{'\n'}

                “No, my brougham is waiting.”{'\n'}{'\n'}

                “Then that will simplify matters.” We descended and started off once more for Briony Lodge.{'\n'}{'\n'}

                “Irene Adler is married,” remarked Holmes.{'\n'}{'\n'}

                “Married! When?”{'\n'}{'\n'}

                “Yesterday.”{'\n'}{'\n'}

                “But to whom?”{'\n'}{'\n'}

                “To an English lawyer named Norton.”{'\n'}{'\n'}

                “But she could not love him.”{'\n'}{'\n'}

                “I am in hopes that she does.”{'\n'}{'\n'}

                “And why in hopes?”{'\n'}{'\n'}

                “Because it would spare your Majesty all fear of future annoyance. If the lady loves her husband, she does not love your Majesty. If she does not love your Majesty, there is no reason why she should interfere with your Majesty’s plan.”{'\n'}{'\n'}

                “It is true. And yet—Well! I wish she had been of my own station! What a queen she would have made!” He relapsed into a moody silence, which was not broken until we drew up in Serpentine Avenue.{'\n'}{'\n'}

                The door of Briony Lodge was open, and an elderly woman stood upon the steps. She watched us with a sardonic eye as we stepped from the brougham.{'\n'}{'\n'}

                “Mr. Sherlock Holmes, I believe?” said she.{'\n'}{'\n'}

                “I am Mr. Holmes,” answered my companion, looking at her with a questioning and rather startled gaze.{'\n'}{'\n'}

                “Indeed! My mistress told me that you were likely to call. She left this morning with her husband by the 5:15 train from Charing Cross for the Continent.”{'\n'}{'\n'}

                “What!” Sherlock Holmes staggered back, white with chagrin and surprise. “Do you mean that she has left England?”{'\n'}{'\n'}

                “Never to return.”{'\n'}{'\n'}

                “And the papers?” asked the King hoarsely. “All is lost.”{'\n'}{'\n'}

                “We shall see.” He pushed past the servant and rushed into the drawing-room, followed by the King and myself. The furniture was scattered about in every direction, with dismantled shelves and open drawers, as if the lady had hurriedly ransacked them before her flight. Holmes rushed at the bell-pull, tore back a small sliding shutter, and, plunging in his hand, pulled out a photograph and a letter. The photograph was of Irene Adler herself in evening dress, the letter was superscribed to “Sherlock Holmes, Esq. To be left till called for.” My friend tore it open and we all three read it together. It was dated at midnight of the preceding night and ran in this way:{'\n'}{'\n'}

                “MY DEAR MR. SHERLOCK HOLMES,—You really did it very well. You took me in completely. Until after the alarm of fire, I had not a suspicion. But then, when I found how I had betrayed myself, I began to think. I had been warned against you months ago. I had been told that if the King employed an agent it would certainly be you. And your address had been given me. Yet, with all this, you made me reveal what you wanted to know. Even after I became suspicious, I found it hard to think evil of such a dear, kind old clergyman. But, you know, I have been trained as an actress myself. Male costume is nothing new to me. I often take advantage of the freedom which it gives. I sent John, the coachman, to watch you, ran up stairs, got into my walking-clothes, as I call them, and came down just as you departed.{'\n'}{'\n'}

                “Well, I followed you to your door, and so made sure that I was really an object of interest to the celebrated Mr. Sherlock Holmes. Then I, rather imprudently, wished you good-night, and started for the Temple to see my husband.{'\n'}{'\n'}

                “We both thought the best resource was flight, when pursued by so formidable an antagonist; so you will find the nest empty when you call to-morrow. As to the photograph, your client may rest in peace. I love and am loved by a better man than he. The King may do what he will without hindrance from one whom he has cruelly wronged. I keep it only to safeguard myself, and to preserve a weapon which will always secure me from any steps which he might take in the future. I leave a photograph which he might care to possess; and I remain, dear Mr. Sherlock Holmes,{'\n'}{'\n'}

                      “Very truly yours,{'\n'}
                   “IRENE NORTON, nèe ADLER.”{'\n'}{'\n'}

                “What a woman—oh, what a woman!” cried the King of Bohemia, when we had all three read this epistle. “Did I not tell you how quick and resolute she was? Would she not have made an admirable queen? Is it not a pity that she was not on my level?”{'\n'}{'\n'}

                “From what I have seen of the lady she seems indeed to be on a very different level to your Majesty,” said Holmes coldly. “I am sorry that I have not been able to bring your Majesty’s business to a more successful conclusion.”{'\n'}{'\n'}

                “On the contrary, my dear sir,” cried the King; “nothing could be more successful. I know that her word is inviolate. The photograph is now as safe as if it were in the fire.”{'\n'}{'\n'}

                “I am glad to hear your Majesty say so.”{'\n'}{'\n'}

                “I am immensely indebted to you. Pray tell me in what way I can reward you. This ring—” He slipped an emerald snake ring from his finger and held it out upon the palm of his hand.{'\n'}{'\n'}

                “Your Majesty has something which I should value even more highly,” said Holmes.{'\n'}{'\n'}

                “You have but to name it.”{'\n'}{'\n'}

                “This photograph!”{'\n'}{'\n'}

                The King stared at him in amazement.{'\n'}{'\n'}

                “Irene’s photograph!” he cried. “Certainly, if you wish it.”{'\n'}{'\n'}

                “I thank your Majesty. Then there is no more to be done in the matter. I have the honour to wish you a very good-morning.” He bowed, and, turning away without observing the hand which the King had stretched out to him, he set off in my company for his chambers.{'\n'}{'\n'}

                And that was how a great scandal threatened to affect the kingdom of Bohemia, and how the best plans of Mr. Sherlock Holmes were beaten by a woman’s wit. He used to make merry over the cleverness of women, but I have not heard him do it of late. And when he speaks of Irene Adler, or when he refers to her photograph, it is always under the honourable title of the woman.{'\n'}{'\n'}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 12,
  },
  storyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2980b9',
    textAlign: 'center'
  },
  storyAuthor: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '600',
    color: '#16a085',
    textAlign: 'center'
  },
  storyName: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: '#d35400',
    textAlign: 'center'
  },
  storyLine: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left'
  },
  story: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'justify',
    lineHeight: 25
  },
});

export default App;
