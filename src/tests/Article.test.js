import React from "react";
import Article from "../Components/Article";
import { shallow } from "enzyme";

const pioneers = [
	{
		"pioneer": "Grace Hopper",
		"id": 1,
		"paragraphs": [
			"Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.",
			"Prior to joining the Navy, Hopper attained a Ph.D. in mathematics from Yale University and was a professor of mathematics at Vassar College. Hopper joined the Navy Reserves and began computing career in 1944 when she worked on the Harvard Mark I team.",
			"In 1949, Grace was part of the team that developed the UNIVAC I computer. She believed that a programming language based on English was possible and during this time, she started working on a complier. Her compiler converted English terms into machine code understood by computers. By 1952, Hopper had finished her program linker (originally called a compiler).",
			"In 1954, she was appointed to lead the department for automatic programming, and she led the release of some of the first compiled languages like FLOW-MATIC.",
			"In 1959, was consulted to guide the creation of a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language being based on English words.",
			"In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.",
			"During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. A college at Yale University was renamed in her honor. In 1991, she received the National Medal of Technology. She was also posthumously awarded the Presidential Medal of Freedom by in November of 2016."
		],
		"wikipedia": "https://en.wikipedia.org/wiki/Grace_Hopper",
		"img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
		"multipleChoice": {
			"questions": [
				{
					"id": 1,
					"prompt": "At which university did Grace Hopper complete her Ph.D?",
					"correctAnswer": "Yale",
					"incorrectAnswers": ["Harvard", "Princeton", "Louisiana State University"]
				},
				{
					"id": 2,
					"prompt": "Fill in the blank: Grace Hopper wanted to create a ___________ based on the English language.",
					"correctAnswer": "programming language",
					"incorrectAnswers": ["computer", "missile", "Naval display"]
				},
				{
					"id": 3,
					"prompt": "Fill in the blank: Grace's compiler was eventually renamed as a/an _______.",
					"correctAnswer": "linker",
					"incorrectAnswers": ["transpiler", "translator", "interpreter"]
				},
				{
					"id": 4,
					"prompt": "How many honorary university degrees was Grace Hopper awarded?",
					"correctAnswer": "40",
					"incorrectAnswers": ["30", "50", "45"]
				},
				{
					"id": 5,
					"prompt": "Grace popularized the idea of machine-independent programming languages, which led to the development of which language that is still used today?",
					"correctAnswer": "COBOL",
					"incorrectAnswers": ["COBALT", "HMWW", "JOTHLA"]
				}
			]
		}
  },
	{
		"pioneer": "Augusta Ada King, Countess of Lovelace",
		"id": 2,
		"paragraphs": [
			"Augusta Ada King, Countess of Lovelace (1815 - 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is sometimes regarded as the first to recognize the full potential of a 'computing machine' and the first computer programmer.",
			"Ada’s mother promoted her interest in mathematics and logic in an effort to prevent her from developing her father's perceived insanity. Ada married William King and in 1838, she become Countess of Lovelace.",
			"When she was a teenager, her mathematical talents led her to a long working relationship and friendship with fellow British mathematician Charles Babbage, also known as 'the father of computers'.",
			"Between 1842 and 1843, Ada translated an article by Italian military engineer Luigi Menabrea on the Analytical Engine, supplementing it with an elaborate set of notes, simply called Notes. These notes contain what many consider to be the first computer program—that is, an algorithm designed to be carried out by a machine.",
			"Ada also developed a vision of the capability of computers to go beyond mere calculating or number-crunching, while many others, including Babbage himself, focused only on those capabilities. Her mindset of 'poetical science' led her to ask questions about the Analytical Engine examining how individuals and society relate to technology as a collaborative tool."
		],
		"wikipedia": "https://en.wikipedia.org/wiki/Ada_Lovelace",
		"img": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg",
		"multipleChoice": {
			"questions": [
				{
					"id": 1,
					"prompt": "In which country was Ada born?",
					"correctAnswer": "England",
					"incorrectAnswers": ["USA", "Ireland", "Germany"]
				},
				{
					"id": 2,
					"prompt": "What was the name of the general-purpose computer that Lovelace and Charles Babbage worked on?",
					"correctAnswer": "The Analytical Engine",
					"incorrectAnswers": ["The Creative Engine", "The Hardware Engine", "The Advanced Mathematical Engine"]
				},
				{
					"id": 3,
					"prompt": "What is Ada attributed with the invention of?",
					"correctAnswer": "The first computer program",
					"incorrectAnswers": ["The first computer", "The first calculator", "A more advanced steam engine"]
				},
				{
					"id": 4,
					"prompt": "True or false: Ada believed that computers should only be used for 'number crunching'.",
					"correctAnswer": "false",
					"incorrectAnswers": ["true"]
				},
				{
					"id": 5,
					"prompt": "Fill in the blank: Ada's 'poetical science' led her to ask questions about individuals, society, and how society could be used as a _________.",
					"correctAnswer": "collaborative tool",
					"incorrectAnswers": ["tool of the arts", "spiritual tool"]
				}
		  ]
	  }
  }
];

describe("Article", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Article 
      // Monday, eliminate multiple unnecessary props
      // currentPioneer={this.state.currentPioneer}
      // pioneers={pioneers}
      // selectPioneer = {this.selectPioneer}
      // hydrate={this.props.hydrate}
      // saveToLocal={this.props.saveToLocal}
      />    
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ displayQuiz: false });
  });
});