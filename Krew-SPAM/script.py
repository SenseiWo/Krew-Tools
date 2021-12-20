from selenium import webdriver 
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import time
browser = webdriver.Chrome(ChromeDriverManager().install())
browser.get('https://krew.io/') 
txt = ";" # token to bypass Anti-Mute
time.sleep(15) 
button = browser.find_element_by_id("play-button")
button.click()
time.sleep(15) 

browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(txt);
browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(Keys.ENTER);
browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(txt);
browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(Keys.ENTER);
browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(txt);
browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(Keys.ENTER);

# Just add more lines to spam more for example do this but x1000:  

#browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(txt);
#browser.find_element_by_xpath("/html/body/div[17]/div[3]/div[2]/input").send_keys(Keys.ENTER);