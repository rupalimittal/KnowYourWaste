# KnowYourWaste

## Short description

### What's the problem?

The rapid increase in amount and types of solid waste is becoming a growing problem for local and national governments. Therefore, We need to ensure effective and sustainable management of waste.Waste Management is faced as a problem by many societies where people are unaware of how to dispose off their items. This sometimes may lead to serious threats to environment as well as life of animals as well.he amount of waste generated is far more than the waste recycled.Improper waste management leads to increase in cost of recycling and more working hours.
This can further lead to overcapacity of dumping grounds and landfills, littered waste around the city. 
These environments act as a breeding ground for diseases.

### How can technology help?

Technology can help in multipe waste in aligning the waste seggregation process.For instance instead of using traditional bins at the final site there can be smart bins with ultrasonic sensors installed(which are very affordable RS- 100-200 approx)  
which will be able to detect the level till which the bins are full.Once the bins are full a notification can be sent to municipal corporation to come and collect garbage from tat place.In tis way the frequency of garbage collection cycle will rreduce leading to less pollution and CO2 emission and also the trash will not litter on the roads.Since at correct time municipal will be notified to collect the waste.

Along with this applications can be created which will help people to identify the category of the waste using machine learning algorithms in the backend .Also to motivate people to do waste seggregation properly some rewards can be given to the users through proper tracking using the application.


### The idea

People are often reluctant to separate the waste, sometimes due to unawareness of how they can be disposed off.
Therefore, we have chosen the approach where we have a process of identifying non- biodegradable and biodegradable material with the help of ML models built for identifying based on this data. 
Here, we are making Deep Learning Model of Waste segregation which will identify the type of waste i.e., Biodegradable, Non-Biodegradable (Sub class: Recyclable, Resuable).
Users can use the app to simply scan the item and it identifies it as biodegradable and nonbiodegradable material. 
Later they can store them in two separate dustbins and the app informs the NGO/Municipal corporation when the dustbins are full. 


## Demo video

https://www.youtube.com/watch?v=uALlrOFO8B0


#### This Repository consists of 3 branches 

1.flask-py-app is for CNN based algorithm which is used for classifying our data.
2.Backend folder makes a connection between mysql db and our code .
3.src code represnts our main react UI .

## The architecture

Please refer the presentation for detailed architecture:


[knowYourWaste.pptx](https://github.com/Navneetkum/Wit-hackathon-knowyourwaste/files/6975299/knowYourWaste.pptx)




NOTE:Please open the ppt in edit mode.In preview mode all things will not be visible 

1. people staying in a society can register as a resident.
2.Garbagge collector can also register in the app.
3. User can see the reward points given by the garbage collector and later get discount coupons or voucers from them.
4. If e is confused about category of a product a picture can be uploaded and ML algorith will tell category.
3. Garbage collector gets to see all socities under him
4. He can give reward points to users based on the way people are seggregating the waste.

    
#### The Tech stack we used
Mysql, Node js ,Tensorflow, Flask, React.js, Heroku, IBM cloud .

#### Working of our project
### link to access the application on ibm cloud 
## https://knowyourwaste.eu-gb.mybluemix.net/
Steps for demo : Upload the picture of the waste you want to classify and after wasiting for 1-2 minutes you will se the result.
Only first upload will take more time . if it's not giving you the results then refresh the heroku link.
1. We have developed machine learning model on heroku app which will be used for classification of waste.(https://glacial-wave-95212.herokuapp.com/).
2. This can be used by registered residents of any society for seggregating the waste.
3. The application will be used by garbage collector and they'll be registered on different page.
4. Grabage collector will give points to society residents on the basis of how well they have seggregated the waste.
5. Points will be used by residents for shopping or other benefits.
6. This will increase the awarness about wastes and points will motivate them to do so.

### FUTURE SCOPE

Smart dustbins using sensors can be installed at the society premises. 

By using IoT technologies, notification will be sent as soon as the dustbins get full.

This saves time and money as the municipal corporation doesn’t have to make multiple rounds for waste collection.

It will also save overflow of waste along side roads and societies. 


