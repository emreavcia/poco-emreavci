/* 
Contraints  
- 12 min torch battery life. 
- Two people at a time. 
- The slowest makes the pace. 
- One has to bring the torch back. 
- All have to make through the tunnel. 	 

# Begin  

#motherPace = 2;   
#fatherPace = 1;   
#sonPace = 4;   
#daughterPace = 5;   
#timeHave = 12;   
#journeyTime;   
#peopleAtStartingPoint = 4;   
#peopleOnTheOtherSide = 0; 

# Father and mother through the tunnel together (2 min).  
    #journeyTime = motherPace;  
    #timeHave = timeHave - journeyTime;   
    #peopleAtStartingPoint = 2;   
    #peopleOnTheOtherSide = 2;   
    #timeHave = 10;
# Father goes back (1 min)   
    #journeyTime = fatherPace;  
    #timeHave = timeHave - journeyTime;   
    #peopleAtStartingPoint = 3;  
    #peopleOnTheOtherSide = 1;   
    #timeHave = 9;  
# Daughter and Son make through the tunnel (5 min).   
    #journeyTime = motherPace;   
    #timeHave = timeHave - journeyTime;   
    #peopleAtStartingPoint = 1;   
    #peopleOnTheOtherSide = 3;   
    #timeHave = 4;
# Mother goes back (2 min).   
    #journeyTime = motherPace;   
    #timeHave = timeHave - journeyTime;   
    #peopleAtStartingPoint = 2;   
    #peopleOnTheOtherSide = 2;   
    #timeHave = 2; 
# Mother and Father go through the tunnel (2 min).    
    #journeyTime = motherPace;   
    #timeHave = timeHave - journeyTime;   
    #peopleAtStartingPoint = 0;   
    #peopleOnTheOtherSide = 4;   
    #timeHave = 0; 

#End
 */