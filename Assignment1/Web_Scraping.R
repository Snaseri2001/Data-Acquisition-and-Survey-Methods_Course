library("rvest")

main_html = read_html("Weather for Sari, Iran.html")

selected_section <- main_html %>% html_elements(xpath = '//*[text() = "Forecast for the next 48 hours"]') %>% html_elements(xpath = '..')
main_table <- selected_section %>% html_elements(xpath = './/table[position() = 1]')
information = main_table %>% html_table()



  
hourly_data_html <- read_html('Hourly forecast for Sari, Iran.html')
selected_section_hourly = hourly_data_html %>% html_elements(xpath = '//*[@id= "wt-hbh-title"]') %>% html_elements(xpath = '..')
main_hourly_rows <- selected_section_hourly %>% html_elements(xpath = './/table[position() = 1]//tr[position() > 1]')

table <- main_hourly_rows %>%
  lapply(function(row) {
    row %>% html_elements("td") %>% html_text()
  }) %>% do.call(rbind, .) %>% as.data.frame()
colnames(table) <- c( "Conditions" ,"Temp" , 	"Weather",	"Feels" , "Like" ,	"Wind" ,	 	"Humidity" ,	"Chance" , "Amount")

Humidity <- gsub("%", "", table[1 :23 , "Humidity"])
Humidity <- as.numeric(Humidity)

Temp <- gsub("", "", table[1 :23 , "Temp"])
Temp <- as.numeric(Temp)

Feels <- gsub("°C", "", table[1 :23 , "Feels"])
Feels <- as.numeric(Feels)





