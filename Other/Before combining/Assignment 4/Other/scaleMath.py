import math
def scaleable(x,y):
    numoftiles = x*y
    numofBlueandGreen = numoftiles*0.68
    blue = int(numofBlueandGreen/2)+1
    green = int(numofBlueandGreen/2)
    if numoftiles <= 25:
        black = 1
    else:
        black = math.floor(((numoftiles - 15)/10)) +1
    tan = numoftiles-blue-green-black
    verifyTotal = blue + green + tan +black
    return [(numoftiles,'total'),(blue,'blue'),(green,'green'),(tan,'tan'),(black,'black'),(verifyTotal,'verify')]

for i in range(5,101):
    print(scaleable(1,i))

for i in range(26,125):
    print("card_"+str(i)+': {'+"\n\t\t"+'"cardObjectType": "black",\n\t\t"tileWord": "card_25",\n\t},')
"""
card_25: {
        "cardObjectType": "black",
        "tileWord": "card_25",
    },
"""