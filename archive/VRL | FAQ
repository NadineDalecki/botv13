const Discord = require('discord.js');
const roleList = require('../info/roles.js');
const Attachment = require('discord.js').Attachment;

module.exports = {
  name: 'faq',
  execute(message) {
    message.delete().catch(_ => { });
    
const intro = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setAuthor('ESL FAQ')
  .setThumbnail('https://cdn.discordapp.com/attachments/512581069761937408/542744331635916811/VRL_LOGO_STYLIZED_VERT.jpg')
  .setURL('https://play.eslgaming.com/help')
	.setDescription('This FAQ is a short version of the [FAQ on the ESL Website](https://play.eslgaming.com/help). Please also check there for answers if you have any questions.\n\nIf you need further help please use the support channels or write a [support ticket](https://play.eslgaming.com/support).')

 const usefulLinks = new Discord.RichEmbed()
	.setColor('#0000ff')
   .setAuthor('Useful Links')
	.setDescription("[ESL Play Website](https://play.eslgaming.com)\n[FAQ on the ESL Website](https://play.eslgaming.com/help)\n[Ladder FAQ](http://esl.gg/ESLladderfaq)\n[Guidelines for Protest Tickets ](https://play.eslgaming.com/faq/protest-procedure)\n[Write a support ticket](https://play.eslgaming.com/support)\n[Brand Guide & Media Files](https://www.eslgaming.com/brand)\n[ESL API Documentation](https://docs.tet.io/)")
  
const GameID = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I link my Game Account?**__')
	.setDescription('You can manage your linked Accounts [here:](https://account.eslgaming.com/user/linkages)\n\nThis also can be done by opening any cup page. Sometimes this is the only way to enter it. That is the case if the game cannot be linked directly. Take a look at the right side bar where you can find the League Widget with an option to enter the necessary information. Please keep your information up to date. You can change it anytime. \n\n:warning:  You are not able to sign up a team for a cup if not all team members have linked their account. Therefore, if you get any error messages, check this first!')

const SignUp = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I sign up for the cup?  How do I check-in?**__')
	.setDescription('Signing up is done by the **team captain**, and requires a **team that fulfills all requirements** (usually age and region requirements, linked accounts and min. number of players).\nIt can be done as soon as the link for the cup is online and before Check-In starts. \n\nWhen you have selected a cup you have to select your team in the **League Widget** to the right and press the big blue “sign up” button! Check-in will be done in the same widget. Please check for the exact check-in times on the cup page and do it as soon as possible.')

const nextCup = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**Where do I find the next cup?**__')
	.setDescription('Go to [ESL Play](https://play.eslgaming.com/global/vrleague), select your game and click on the next cup for your region!')
  
const Brackets = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**Who is my next opponent?  What are brackets?**__')
  .setImage('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2Fscreenshot-play.eslgaming.com-2018-10-28-16-04-28.png?1556022416283')
	.setDescription("This can be seen in two places, the brackets (**Results** tab where the rounds are shown in a Swiss Cup), where you can see who plays against who, OR, in the League Widget where you signed up. For more information click on the match. Be proactive! Try to avoid delays! If your opponent is offline or doesn't react contact an admin.")

const Result = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I enter / confirm the results?**__')
	.setDescription("Once the match against a team is played, go to the same place where you checked in (League Widget), and press the **enter result** button, alternatively **confirm result** if your opponent was quicker at putting in the results. Please check the Quick Rules for more information about how the results should be entered or ask an admin for help. As soon as all teams have confirmed the results, the next matches are played. \n\nIMPORTANT: PLEASE **don't forget to confirm the results** because otherwise everybody has to wait until the issue is resolved! If the loser enters the results they get confirmed automatically which is why this is the prefered way.")

const LeaveTeam = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I leave a team?**__')
	.setDescription('[Click here!](<https://play.eslgaming.com/leave_team/>)\n\n:warning: Although it is possible to have substitute players on a team **it is NOT allowed to be on multiple teams who signed up for a cup**. Please check if you are before every cup. Mistakes can result in errors during the cup and can be punished (it is considered cheating because you would get more exp for participating with multiple teams).\n\nIf you get an error message containing something like *...it is in a league that has a limitation for the maximum number of members...* please write a support ticket. If you want to switch a player in the team you may be able to work around the issue by inviting the new player first and leaving the team afterwards.')

const TeamPermissions = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I change the roles/permissions of a team member?**__')
	.setDescription('Every team needs ONE Leader so we know who to contact. Only Leaders can sign-up teams or write tickets for price money. If you want to give other members of the team the same permissions please use *Co-leader*\n\n')

const CupDuration = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How long does a cup take? Can I take breaks?**__')
	.setDescription('The duration of the cup is hightly influenced by technical errors and waiting times. Therefore it is essential that everybody tries to avoid any unnecessary delays.\nThis means:\n- be proactive and send out invites to your opponent as soon as possible\n- same for entering the results\n-**Do not rely on the schedule on the cup info page: Yes, there is a timeschedule for the next round in Swiss cups BUT the next round always starts when everybody has finished the previous match.** Therefore always keep an eye on the bracket or make sure your teammates can call you back to your pc at any time.\n\nCausing delays by not following the ESL rules can result in a default win for the other team, disqualification or penalty points, especially if your match is supposed to be broadcasted!!!')

const TechnicalIssues = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**We have technical issues, what should we do?**__')
	.setDescription('According to the ESL rules **technical problems** (game crashs, internet problems etc.) are the problem of the individual player and therefore are NO reason to stop the game. Please go to the **Rules** tab of your game to find the rule book and check the exact procedure if any issues arise. These are different for every game.')

const PlayerIssues = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**The other team/a player behaves inappropriately or is cheating/using hacks, what can/should we do?**__')
	.setDescription("Players and **teams are responsible for reporting any misconduct, unsportsmanlike behavior, cheating or other disruptive behavior** to the ESL Administration Staff. Please submit reports via ticket!\n\nBut first, try to clarify the situation with the opponent (ideally before you start playing!). Check if all requirements are met and in game rules are set correctly.\n\n:warning:As soon as the match starts you accept the conditions under which it was set up!\n\nIf you find errors later please finish the match. Only make corrections if they do not cause delays or are absolutely essential to achieve a result. \n\nIf the match is not playable or becomes unplayable at some point or if you want to dispute the results open a **protest ticket** immediately. Same if the opponent doesn't answer or does not enter the results. Provide proof, a detailed description of the issue and be available if the admin has further questions.")

const NoShow = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle("__**The opponent doesn't show up, what should we do?**__")
	.setDescription('**A match has to start withing 15 minutes after the round is announced** (if your match is broadcasted follow the instructions of the ESL staff).\n\n:exclamation:The Schedule for Swiss Cups is NOT used!\n\nIf the other team is not there after 15 minutes please open a protest ticket. (If you do it earlier we can help trying to contact the other team, do not wait longer than 15 minutes!)**If the team shows up but no admin answered so far, start playing but check the ticket between rounds/matches**. If the matches take to long and cause delays of the cup the admin may ask you to shorten the matches or will give a default win to the team that was ready to play when the round started.')

const NewTeam = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**How do I create a new team?**__')
            
const Tickets = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**When do I write a support ticket and when a protest ticket?**__')
	.setDescription("A **support ticket** is only visible for you and an ESL Admin. Therefore use it for issues that concern only you or your team.  (technical issues, questions about rules, etc.)\n\nA **protest ticket** is always related to a match and visible by both teams and the ESL Admins. Therefore use it only for issues related to a specific match.\n\n:exclamation: Only a protest ticket stops us admins from continuing the cup and needs to be resolved before the next round can be started! Don't hestitate to use this option if you have issues with your opponent or want to dispute a result and want our assistence. Support tickets send via a global link may not reach us in time because they have to be forwarded to the correct game section!!! \n\nKeep in mind that your opponent can read protests too. You can find some guidelines [here](https://play.eslgaming.com/faq/protest-procedure)")
    
const Money = new Discord.RichEmbed()
	.setColor('#0000ff')
	.setTitle('__**We won prize money!  How do we get it?**__')
	.setDescription(':exclamation: Prize money is collected in intervals.  Please wait for our announcements in which we tell you when you can send in tickets and for which cups.\nThe team captains send in the ticket with the total sum and the distribution between the teammates.  Players will then be contacted individually for the payment details.\n\n  https://play.eslgaming.com/intern/vrl-prize-money/support/\n\n:one: For **Category** select *General Question or Problem*\n:two: For **Section** Select *ESL Play VRL Prize Money*\n:three: Enter a **Subject** (Prize Money + Team name)\n:four: Select your team\n:five: Provide the following information:\n- Link to your Team page\n- For __every player/substitute__ that will receive money:\n  - Full name\n  - Email adress that was used for the ESL Account\n  - Country of residency\n  - Amount of money per player')

    if (message.member.roles.has(roleList.get("esh"))) {
      message.channel.send(intro).then(async msg => {
        await msg.channel.send(usefulLinks)
        await msg.channel.send(GameID)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FLeague%20Widget.mp4?1556181013572', 'Game Account.mp4'))
        await msg.channel.send(SignUp)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FESL%20GIF%20Sign%20Up%20Check%20In.mp4?1557568271405', 'Sign-Up Check-In.mp4'))
        await msg.channel.send(nextCup)
        await msg.channel.send(Brackets)
        await msg.channel.send(Result)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FESL%20GIF%20Entering%20Results.mp4?1557568262125', 'Entering Results.mp4'))
        await msg.channel.send(Money)
        await msg.channel.send(NewTeam)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FESL%20Create%20a%20Team.mp4?1556181083009', 'Create A Team.mp4'))
        await msg.channel.send(LeaveTeam)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/764cdacc-5716-4297-9bd5-b7bb588da8f7%2FESL%20Leave%20A%20Team.mp4?1550235786628', 'Leave A Team.mp4'))
        await msg.channel.send(TeamPermissions)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FESL%20Change%20Team%20Permissions.mp4?1556181011673', 'Change Permissions.mp4'))
        await msg.channel.send(CupDuration)
        await msg.channel.send(TechnicalIssues)
        await msg.channel.send(PlayerIssues)
        await msg.channel.send(NoShow)
        await msg.channel.send(Tickets)
        await msg.channel.send(new Attachment('https://cdn.glitch.com/67f695a9-eea5-47df-bcdb-5b5612f31d5d%2FESL%20GIF%20Tickets.mp4?1557568278218', 'Support and Protest Tickets.mp4'))
      })
    }
  }
}
