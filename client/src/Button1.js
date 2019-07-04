import React from 'react'
import {withButton} from './ButtonProvider'


    const Button1 = (props) => {
         
        let myRef = React.createRef() 
       
        function getNews(url, name) {
            props.getNewsSource(url, name)
            props.loadingAnimation()
        }
    
        function getNews2(url, name) {
            props.getNewsCountry(url, name)
            props.loadingAnimation()
        }

        function  scrolling(){
          props.editSwitch()
          myRef.current.scrollTo({top: 0, behavior: 'smooth'})
        }
       
    
    return (
        <div className = "button2Wrap">
                <div className = 'h1Wrapper'>
                    <h1 className = 'sourceName4'> {`Reading now: ${props.sourceName || props.name}`}</h1>   
                </div>
                <div className = "navbarWrap2" ref = {myRef}>
                {props.switch  ?
                    <div>
                    <p className = 'topHead'>Top headlines from:</p>
                    <p className = 'argentina' onClick = {()=> getNews2("ar", "Argentina")}>Argentina</p>
                    <p onClick = {()=> getNews2("au", "Australia")}>Australia</p>
                    <p onClick = {()=> getNews2("at", "Austria")}>Austria</p>
                    <p onClick = {()=> getNews2("be", "Belgium")}>Belgium</p>
                    <p onClick = {()=> getNews2("br", "Brazil")}>Brazil</p>
                    <p onClick = {()=> getNews2("bg", "Bulgaria")}>Bulgaria</p>
                    <p onClick = {()=> getNews2("ca", "Canada")}>Canada</p>
                    <p onClick = {()=> getNews2("cu", "Cuba")}>Cuba</p>
                    <p onClick = {()=> getNews2("cz", "Czech Republic")}>Czech Republic</p>
                    <p onClick = {()=> getNews2("co", "Colombia")}>Colombia</p>
                    <p onClick = {()=> getNews2("cn", "China")}>China</p>
                    <p onClick = {()=> getNews2("eg", "Egypt")}>Egypt</p>
                    <p onClick = {()=> getNews2("fr", "France")}>France</p>
                    <p onClick = {()=> getNews2("de", "Germany")}>Germany</p>
                    <p onClick = {()=> getNews2("gr", "Greece")}>Greece</p>
                    <p onClick = {()=> getNews2("hk", "Hong Kong")}>Hong Kong</p>
                    <p onClick = {()=> getNews2("hu", "Hungary")}>Hungary</p>
                    <p onClick = {()=> getNews2("it", "Italy")}>Italy</p>
                    <p onClick = {()=> getNews2("id", "Indonesia")}>Indonesia</p>
                    <p onClick = {()=> getNews2("ie", "Ireland")}>Ireland</p>
                    <p onClick = {()=> getNews2("in", "India")}>India</p>
                    <p onClick = {()=> getNews2("il", "Israel")}>Israel</p>
                    <p onClick = {()=> getNews2("jp", "Japan")}>Japan</p>
                    <p onClick = {()=> getNews2("kr", "Korea")}>Korea</p>
                    <p onClick = {()=> getNews2("lv", "Latvia")}>Latvia</p>
                    <p onClick = {()=> getNews2("lt", "Lithuania")}>Lithuania</p>
                    <p onClick = {()=> getNews2("my", "Malaysia")}>Malaysia</p>
                    <p onClick = {()=> getNews2("mx", "Mexico")}>Mexico</p>
                    <p onClick = {()=> getNews2("ma", "Morocco")}>Morocco</p>
                    <p onClick = {()=> getNews2("nl", "Netherlands")}>Netherlands</p>
                    <p onClick = {()=> getNews2("nz", "New Zealand")}>New Zealand</p>
                    <p onClick = {()=> getNews2("ng", "Nigeria")}>Nigeria</p>
                    <p onClick = {()=> getNews2("no", "Norway")}>Norway</p>
                    <p onClick = {()=> getNews2("pl", "Poland")}>Poland</p>
                    <p onClick = {()=> getNews2("pt", "Portugal")}>Portugal</p>
                    <p onClick = {()=> getNews2("ru", "Russia")}>Russia</p>
                    <p onClick = {()=> getNews2("ro", "Romania")}>Romania</p>
                    <p onClick = {()=> getNews2("sa", "Saudi Arabia")}>Saudi Arabia</p>
                    <p onClick = {()=> getNews2("rs", "Serbia")}>Serbia</p>
                    <p onClick = {()=> getNews2("sg", "Singapore")}>Singapore</p>
                    <p onClick = {()=> getNews2("sl", "Slovakia")}>Slovakia</p>
                    <p onClick = {()=> getNews2("si", "Slovenia")}>Slovenia</p>
                    <p onClick = {()=> getNews2("za", "South Africa")}>South Africa</p>
                    <p onClick = {()=> getNews2("se", "Sweeden")}>Sweeden</p>
                    <p onClick = {()=> getNews2("ch", "Swiss")}>Swiss</p>
                    <p onClick = {()=> getNews2("tw", "Taiwan")}>Taiwan</p>
                    <p onClick = {()=> getNews2("th", "Thailand")}>Thailand</p>
                    <p onClick = {()=> getNews2("tr", "Turkey")}>Turkey</p>
                    <p onClick = {()=> getNews2("ua", "Ukraine")}>Ukraine</p>
                    <p onClick = {()=> getNews2("ae", "United Arab Emirates")}>United Arab Emirates</p>
                    <p onClick = {()=> getNews2("gb", "United Kingdom")}>United Kingdom</p>
                    <p onClick = {()=> getNews2("us", "USA")}>USA</p>
                    <p onClick = {()=> getNews2("ve", "Venezuela")}>Venezuela</p>
                    <p  className = 'switchTo' onClick = {() => scrolling()}>switch to channels</p>  
                </div>
                :
                <div>
                    <p className = 'topHead'>Top headlines from:</p>
                    <p className = 'argentina' onClick = {()=> getNews("abc-news", "ABC News")}>ABC </p>
                    <p onClick = {()=> getNews("axios", "Axios")}>Axios</p>
                    <p onClick = {()=> getNews("bbc-news", "BBC News")}>BBC News</p>
                    <p onClick = {()=> getNews("bbc-sport", 'BBC Sport')}>BBC Sport</p>
                    <p onClick = {()=> getNews("business-insider", 'Businsess Insider')}>Business Insider</p>
                    <p onClick = {()=> getNews("business-insider-uk", 'Business Insider UK')}>Business Insider UK</p>
                    <p onClick = {()=> getNews("cbs-news", 'CBS News')}>CBS</p>
                    <p onClick = {()=> getNews("cnn","CNN")}>CNN</p>
                    <p onClick = {()=> getNews("cnbc", "CNBC News")}>CNBC </p>
                    <p onClick = {()=> getNews("crypto-coins-news", 'Crypto Coins News')}>Crypto News</p>
                    <p onClick = {()=> getNews("daily-mail", "Daily Mail News")}>Daily Mail</p>
                    <p onClick = {()=> getNews("espn", 'ESPN News')}>ESPN</p>
                    <p onClick = {()=> getNews("entertainment-weekly", 'Entertaiment Weekly')}>Entertainment Weekly</p>
                    <p onClick = {()=> getNews("financial-times", 'Financial Times')}>Financial Times</p>
                    <p onClick = {()=> getNews("fox-news", 'FOX News')}>FOX News</p>
                    <p onClick = {()=> getNews("fox-sports", 'FOX Sports')}>FOX Sports</p>
                    <p onClick = {()=> getNews("google-news" , 'Google News')}>Google News</p>
                    <p onClick = {()=> getNews("independent", 'Independent')}>Independent</p>
                    <p onClick = {()=> getNews("mtv-news", 'MTV News')}>MTV News</p>
                    <p onClick = {()=> getNews("the-new-york-times", ' NY Times')}>New York Times</p>
                    <p onClick = {()=> getNews("nfl-news", 'NFL News')}>NFL News</p>
                    <p onClick = {()=> getNews("national-geographic", 'National Georgraphic')}>National Geographic</p>
                    <p onClick = {()=> getNews("newsweek", 'Newsweek')}>Newsweek</p>
                    <p onClick = {()=> getNews("news24", 'NEWS 24')}>NEWS 24</p>
                    <p onClick = {()=> getNews("reuters", "Reuters")}>Reuters</p>
                    <p onClick = {()=> getNews("the-economist", 'The Economist')}>The Economist</p>
                    <p onClick = {()=> getNews("the-washington-times", 'Washington Times')}>The Washington Times</p>
                    <p onClick = {()=> getNews("the-washington-post", 'Washington Post')}>The Washington Post</p>
                    <p onClick = {()=> getNews("time", 'TIME')}>TIME</p>
                    <p onClick = {()=> getNews("usa-today", 'USA Today')}>USA Today</p>
                    <p onClick = {()=> getNews("the-wall-street-journal", 'Wall Street Journal')}>Wall Street Journal</p>
                    <p className = 'switchTo' onClick = {() => scrolling()}> switch to countries</p>
                </div>
                }
           </div>
        </div>
    )
    }

               

export default  withButton(Button1)

