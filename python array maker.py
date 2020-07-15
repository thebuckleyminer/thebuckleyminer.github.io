importList = []
exportList = []

f = open("gameWordBank.csv", "r")
for x in f:
    x.strip()
    importList.append(x.capitalize())
f.close()

for i in importList: 
    exportList.append(i.replace("\n", "")) 

print(exportList)