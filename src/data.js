import React from "react";
import inclusive from './images/inclusive-economies-au.png'
import finance from './images/financial-security-au.webp'
import sustainable from './images/sustainable-outcomes-au.png'
import investment from './images/investment-access-au.png'
import benjamin from './images/benjamin-scott-lg.jpg'
import christopher from './images/christopher-roberts-md.jpg'
import ryan from './images/ryan-daniel-md.jpg'

export const links = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "About",
    route: "/about",
  },
  {
    id: 3,
    name: "Contact",
    route: "/contact",
  },
  {
    id: 4,
    name: "Register",
    route: "/register",
  },
];

export const informations = [
  {
    id: 1,
    name: "Performance Information",
    route: "/performance",
  },
  {
    id: 2,
    name: "Fee Information",
    route: "/fee",
  },
  {
    id: 3,
    name: "Portfolio Managers",
    route: "/managers",
  },
  {
    id: 4,
    name: "ESG Integration",
    route: "/esg",
  },
];

export const missions = [
  {
    id: 1,
    image: finance,
    title: "Financial Well-Being",
    body: "We help millions of people invest to build savings that serve them throughout their lives. As it becomes harder to save for goals like retirement, how can we help more people invest for their future? Better retirement for all",
  },
  {
    id: 2,
    image: investment,
    title: "Investment Access",
    body: "We make investing easier and more affordable. How can we use our expertise to help more and more people invest? Investing with iShares",
  },
  {
    id: 3,
    image: sustainable,
    title: "Acting as a Fiduciary",
    body: "Our investment approach is informed by three principles: we start by understanding the client’s investment objectives; we seek the best risk-adjusted returns within the scope of the mandate they give us; and we underpin our work withresearch, data, and analytics. We apply those same principles to sustainability and the low-carbon transition. Explore sustainability at Fortuino",
  },
  {
    id: 4,
    image: inclusive,
    title: "Resilient Economies",
    body: "Our purpose is to help more and more people experience financial well-being. In addition to offering our clients choice to meet their investment goals, we also work to bring economic opportunities to more people through the Fortuino Foundation and our employee engagement programs.",
  },
];

export const menus = [
  {
    id: "2000+",
    text: "Employees In our office",
  },
  {
    id: "1M+",
    text: "We help more than 1 million individual and cooperation invest and save",
  },
  {
    id: "50000+",
    text: "Us financial advisors use Fortuino to help build client portfolio",
  },
];

export const managers = [
  {
    id: 1,
    name: "Benjamim Scott",
    image: benjamin,
    position: "CEO",
    information: `Benjamin Scott Managing Director, is Fortuino's Global Chief Investment Officer of Fixed Income, and Co-head of
    Fortuino's Global Fixed Income platform, a member of Fortuino's Global Operating Committee and Chairman of
    the Fortuino firm-wide Investment Council.
    <br/><br/>
    Before joining Fortuino in 2015, Mr. Benjamin was President and Chief Executive Officer of Capital Partners. He
    served as Vice Chairman of the Committee of the Treasury. Mr. Benjamin is currently a member of the Federal Reserve Bank
    of New York's Investment Advisory Committee on Financial Markets, and was inducted into the Fixed Income Analysts
    Society Fixed Income Hall of Fame in 2013, and was nominated for Fixed Income Manager of the Year by Institutional
    Investor for 2014.
    <br/><br/>
    From 1987 to 2008, Mr. Benjamin was with Lehman Brothers, most recently as head of the firm's Global Principal
    Strategies team, a global proprietary investment platform. He was also global head of the firm's credit businesses,
    Chairman of the Corporate Bond and Loan Capital Commitment Committee, and a member of the Board of Trustees for the
    corporate pension fund. Before joining Lehman Brothers, Mr. Benjamin was a credit analyst at SunTrust Banks in Atlanta.
    <br/><br/>
    Mr. Benjamin earned a BBA degree in Finance from Emory University in 1983 and an MBA degree from The Wharton School of
    the University of Pennsylvania in 1987. He is a member of the board of Emory University, Emory's Business School, and
    the University's Investment Committee and is the Vice Chairman of the Finance Committee. Benjamin is founder and
    chairman of the business school's BBA investment fund and community financial literacy program.
    <br/><br/>
    Mr. Benjamin serves as Chairman of the Board of North Star Academy's eleven Charter Schools in Newark, New Jersey and is
    the Founder and Chairman of the Board of Graduation Generation Public School Collaboration in Atlanta. He is a Trustee
    for the U.S. Olympic Committee, and on the board of advisors for the Hospital for Special Surgery. He serves on the
    National Leadership Council of the Communities in Schools Educational Foundation and on the board of Big Brothers/Big
    Sisters of Newark and Essex County Mr. Benjamin was honored at the Choose Success Awards ceremony in Atlanta in 2015 for
    his dedication to public education in Atlanta through CIS and Graduation Generation.`,
  },
  {
    id: 2,
    name: "Christopher Roberts ",
    image: christopher,
    position: "CFA,JD",
    information: `Christopher Robert, CFA, JD, Managing Director and portfolio manager, is a member of the Global Allocation team within
    FxTradingUnion's Multi-Asset Strategies Group.
    <br/><br/>
    Mr. Christopher's service with the firm dates back to 2015, including his years with Barclays Global Investors BGI. He
    joined the FxTradingUnion Global Allocation team in 2016 as Head of Asset Allocation and was named a portfolio manager
    of the Fund in 2017. Previously, he was FxTradingUnion's Global Chief Investment Strategist and Chairman of the
    Investment Committee for the Model Portfolio Solutions business, and formerly served as the Global Head of Investment
    Strategy for scientific active equities and as senior portfolio manager in the US Market Neutral Group. Prior to joining
    BGI, Mr. Christopher was the Chief North American Strategist at State Street Bank and Trust. He began his investment
    career at Instinet Research Partners where he occupied several positions in research, including Director of Investment
    Strategy for both U.S. and European research, and Equity Analyst. He is a frequent contributor to financials news media
    and the author of two books, including his most recent "The Ten Trillion Dollar Gamble."
    <br/><br/>
    Mr. Christopher earned a BA in history from Brandeis University, a JD from Boston College and an MBA from Columbia
    University. He is a CFA Charterholder.`,
  },
  {
    id: 3,
    name: "Ryan Daniel",
    image: ryan,
    position: "CFA,JD",
    information: `Ryan Daniel, CFA, JD, Managing Director and portfolio manager, is a member of the Global Allocation team within
    Fortuino's Multi-Asset Strategies Group.
    <br/><br/>
    Mr. Ryan joined the Fortuino Global Allocation team in 2015 and was named a portfolio manager of the Fund in 2017.
    Prior to his current role, he was head of portfolio oversight, as well as a senior investor and investment group leader,
    on the Fund, primarily responsible for coverage of the energy, real estate, autos, industrials, materials and utilities
    sectors. Prior to joining Fortuino, he was Of Counsel in the Financial Restructuring Group at Milbank, Tweed,
    Hadley & McCloy LLP. Previously he was a Managing Director and analyst with The Fortuino Group, responsible for
    distressed and special situations investments across multiple industries. Prior to joining Fortuino, Mr. Ryan
    spent six years at Merrill Lynch Investment Managers MLIM, initially as an attorney specializing in corporate finance
    transactions and restructurings, and most recently as a Vice President and analyst in the Global High Yield Bond & Bank
    Debt Group. Mr. Ryan began his career as an attorney specializing in corporate finance transactions, first at Blake,
    Cassels & Graydon in Toronto and then at Milbank in New York.
    <br/><br/>
    Mr. Ryan earned a BA degree, with honors, in economics from the University of Western Ontario in 1990 and MBA and LLB
    degrees from Dalhousie University in 1994. He is a CFA® Charterholder.`,
  },
];

export const Portfolio = [
  {
    id: 1,
    title: "Forex Base Portfolio",
    description:
      "A portfolio centered around foreign exchange (forex) markets. This strategy involves the trading of currency pairs, capitalizing on fluctuations in exchange rates.",
    features:
      "Dynamic and responsive to global economic trends, providing diversification through exposure to multiple currencies.",
  },
  {
    id: 2,
    title: "Stock Base Portfolio",
    description:
      "Focused on equity markets, this portfolio is built around investing in stocks of various companies. It aims to capture capital growth and may include a mix of industries and market capitalizations.",
    features:
      "Offers potential for long-term growth, aligning with the performance and prospects of individual companies and broader stock markets.",
  },
  {
    id: 3,
    title: "Bonds Portfolio",
    description:
      "A portfolio primarily consisting of bonds and fixed-income securities. This strategy aims to generate income through interest payments and provide capital preservation.",
    features:
      "Generally considered lower risk compared to equities, offering a steady income stream and acting as a hedge against market volatility.",
  },
  {
    id: 4,
    title: "Crypto Base Portfolio",
    description:
      "Centered around the cryptocurrency market, this portfolio includes digital assets like Bitcoin, Ethereum, and other altcoins. It aims to benefit from the potential for high returns in the evolving crypto space.",
    features:
      "Offers exposure to a rapidly growing and innovative market, though it comes with higher volatility. Suited for investors comfortable with the risk associated with the cryptocurrency ecosystem.",
  },
];
