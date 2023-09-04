const check = document.getElementById("check") 

if(localStorage.getItem("darkMode") === null){
    localStorage.setItem("darkMode" , "false");   
}

function checkStatus(){
    if(localStorage.getItem("darkMode") === "true"){   
        check.checked = true;                        
        applyTheme("dark_theme.css");      
    }
    else {                                           
        check.checked = false;                     
        applyTheme("");      
    }
}

checkStatus()

function applyTheme(themeFile) {
    const themeLink = document.getElementById("theme-style");
    themeLink.href = themeFile;
}

function applySettingsToAllPages(){                             
    if(check.checked === true){   
        localStorage.setItem("darkMode", "true");   
        applyTheme("dark_theme.css");      
    }
    else {                                           
        localStorage.setItem("darkMode", "false");    
        applyTheme("");      
    }
}