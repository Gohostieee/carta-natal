from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from flask import Flask
from flask import request
import json


def navigateTo(browser, website):
    browser.get(website)


options = Options()
options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'
browser = webdriver.Firefox(options=options)


def inputCarta(browser, data):
    navigateTo(browser, "https://carta-natal.es/carta.php")

    inputElements = {"nombre": browser.find_element(By.ID, 'nombre'),
                     "fecha": browser.find_element(By.ID, "fecha"),
                     "hora": browser.find_element(By.ID, "hora"),
                     "pais": browser.find_element(By.XPATH, '//option[contains(text(), "{}")]'.format(data["pais"])),
                     }
    browser.execute_script("""
        const element = document.querySelectorAll("[id^='google_ads']")
console.log(element.length);
        for (let i = 0; i < element.length; i++) {
            element[i].parentNode.removeChild(element[i]);
        }
    """)
    inputElements["fecha"].clear()
    inputElements["hora"].clear()

    inputElements["nombre"].send_keys(data["nombre"])
    inputElements["fecha"].send_keys(data["fecha"])
    inputElements["hora"].send_keys(data["hora"])
    # browser.find_element(By.ID, "Pais").click()
    browser.execute_script("""
        const pais = document.getElementById("Pais")
        console.log(pais)
        pais.click()
        //const element  = document.querySelector("option[value={countryVal}]")
        //console.log(element,pais,"fuap")
        //element.focus()
        const form = document.getElementsByClassName("form_carta")[0]
        window.scrollBy(0,500)

        var scale = 'scale(0.3)';
        document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
        document.body.style.msTransform =   scale;       // IE 9
        document.body.style.transform = scale;   

    """.format(countryVal=data["pais"]))
    # actions.scroll_by_amount(0,1250)

    inputElements["pais"].click()
    passed = False
    while not passed:
        try:
            browser.execute_script("""
                const city = document.getElementsByTagName("noscript")
                console.log(city)
                const province = document.getElementById("n1").getElementsByTagName("option")[1]
                console.log(province,"fuap")
                return province
            """).click()
            browser.find_element(By.ID, 'select-ciudad').click()
            browser.execute_script("""
                return document.getElementById("ui-id-1").getElementsByTagName("a")[0]
            """).click()
            browser.execute_script("""
            return document.getElementsByName("ok")[0]
        
            """).click()
            passed = True
        except:
            passed = False

    cardData = None
    while cardData is None:
        cardData = dict()

        cardData["img"] = browser.execute_script("""
                return document.getElementById('cartaimg').src
            """)
        cardData["bars"], cardData["names"] = browser.execute_script("""
              function fuaps(){

            const B = Array.prototype.map.call(document.querySelectorAll(".generalidad"), x=>x);
            const bars = [];

           const names =  B.filter(function(v, i) {
  // check the index is odd
  return i % 2 == 0 || i == 0;
}).map(x=>x.innerText).join();
            
            Array.prototype.map.call( document.getElementsByClassName('barra'),(x,i)=>bars.push([x.children[0].style["width"],x.children[0].style["backgroundColor"]]));
                return [bars,names]
}
            return fuaps()
            """)
        cardData["tables"] = [x.get_attribute('outerHTML') for x in browser.execute_script("""
            Array.prototype.map.call(document.querySelectorAll("img[src='//carta-natal.es/archivos/css/sprite.png'"),x=>x.remove())
            return document.querySelectorAll("table.astros.pull-left")
            """)]
        cardData["aspect"] = browser.execute_script("""
        return document.getElementById("aspectario").querySelector(".table-responsive").outerHTML
        """)
    navigateTo(browser, "https://carta-natal.es/carta.php")

    return cardData


app = Flask(__name__)


@app.route("/get_carta", methods=["POST"])
def getCarta():
    global browser
    fuap = None
    try:
        fuap = inputCarta(browser=browser, data=json.loads(request.data.decode()))
    except Exception as e:
        print(e)
    finally:
        #navigateTo(browser, "https://carta-natal.es/carta.php")
        pass
    return fuap

@app.route("/")
def home_view():
        return "<h1>Welcome to Geeks for Geeks</h1>"
if __name__ == '__main__':
    navigateTo(browser, "https://carta-natal.es/carta.php")

    app.run()
    pass
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
