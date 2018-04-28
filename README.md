# BuildingNYC

We started off in the first week considering international timber trade patterns as a potential topic. We located an excellent, rich UN data source. But after further discussion and feedback, we decided to change our idea to have a more urban focus. We started considering building materials as a more general category, and in relation to cities.

Then, through research, we found a report about the effects of Superstorm Sandy that related in part to building materials was generally about the resilience of city buildings: NYC_SIRR_Buildings.pdf. The report included an analysis of the buildings that received red tags after Sandy, and how most of these were two floors or less and had combustible frames (made of wood rather than steel). The report also discussed the risk to areas of NYC from future surges, potentially exacerbated by climate change. We realized that PLUTO was a good source of data if we were going to explore this topic, or a related one, because it had ownership info, addresses, building class, number of floors, assessed value, year the building was built and years it was altered. 

The group agreed this was a good direction to explore because it is a rich topic, and PLUTO is a good, accessible data source.  We also realized we could integrate live images of the buildings on the lots at addresses listed in PLUTO, so that seemed very promising in terms of visualization potential. And we thought it might also be interesting to integrate census data to get more specifics about who was affected by the storm in terms of demographics. We determined to try to find a database of red tag buildings, to complement the PLUTO data.

We made a summary of data points and sources to get, as follows:

Geographies (disaggregate by Borough) 
New York City (baseline for comparison)
Red/Yellow Tagged buildings  

Descriptive Stats:
Number of floors 
Building materials (may not be in Pluto)
Building Age
NYC open data - Damage By Sandy By Age
https://data.cityofnewyork.us/Housing-Development/Damage-By-Sandy-By-Age-Of-Building/mgjt-zuui

Land Use
NYC open data - Damage By Sandy By Land Use
https://data.cityofnewyork.us/Housing-Development/Damage-By-Sandy-By-Land-Use/tgvi-w9ww/data
FAR
Assessed Land Value (overtime, maybe before and after Sandy)

Demographics (Census Data)

Damage costs

Datasets 

2012 Pluto 
2017 Pluto

Descriptive Stats for the following:
2012 All of NYC
2012 Red & Yellow Tag
2018 All of NYC
2018 Red & Yellow Tag 

Plot Distribution 
Mean
Min Max

And we noted these sources: Sandy: NYC build it back
http://www.nyc.gov/html/recovery/html/home/home.shtml

NYCHA Sandy Recovery & Progress
http://www1.nyc.gov/site/nycha/about/recovery-resiliency.page

https://www.fema.gov/building-code-resources

On further inspection, we noticed that the PLUTO Codebook also included a category called Special Coastal Risk, and a Flood Insurance Indicator, which we thought also worth noting for possible analysis later. 

SECOND WEEK The next step was to find the appropriate PLUTO data and do data exploration. We found PLUTO data from 2009 to 2017. Originally we were looking at Staten Island and Queens, and we identified severely flood areas in those two boroughts because we knew they were hit with a lot of damage. We did initial data exploration on the attributes discussed above, generating descriptive statistics and charts that compared the years 2012 vs 2017, and severely flooded areas vs all of NYC, for Assessed Total Value, Built Year per Lot, Land use Per lot, etc for 10,000 lots. We also pulled out owner information for Queens and Staten Island.

We also made maps from FEMA damage assessments after Hurricane Sandy, with red outlines to indicate the blockgroups where the most severe damage occurred. The data was aggregated to the census block group level. The maps showed percent of buildings that suffered damaged from 4 plus feet of water on the first floor, percent of building damaged by the hurricane but not by flooding, and percent of buildings that suffered damage where the owners had no insurance.

We also made charts to look at population and racial characteristics, as well as the relation between year built and number of floors for relevant Staten Island and Queens areas. 

The data exploration can be found at https://kkkddder.github.io/BuildingNYC/Ass1.html

THIRD WEEK Further research narrowed down the geographical area of interest. We learned that there were two main programs that served the victims of Superstorm Sandy. One was city run and called Build it Back, and was focused on rebuilding and sometimes elevating damaged houses through contractors ususally managed by the city.  This federally funded program had some successes but was also plagued by problems. Immigrants in the affected areas did not know about the program at first, there were not enough resources devoted to the program, and contractors had a hard time making homes storm-proof within the alloted budget, among other things. Several years later, there were still issues. When DeBlasio took over as mayor he allocated more resources to the program, but even with that, only 87% of the eligible homes have been rebuilt. People apparently dropped out of the program after years of frustration, so it is not clear if this number is indicative of the actual completion rate. 

A second main program was run by the state government, initiated by Governor Andrew Cuomo. This program invested $200 million to buy back the land / damaged homes at pre-Sandy rates in three devastated areas of Staten Island: Oakwood Beach, Ocean Breeze, and Graham Beach. The plan was to demolish those battered homes and rewild the land (seeding it), returning it to wetlands. (This strategy is called managed retreat.) The upside here was two-fold: people could quickly move on with their lives, and the program eliminated the risk of future damage from storms in this waterfront area., because the land is restored to its natural floodplain function. (Other areas in NYC such as Williamsburg, Greenpoint, and Long Island City are rebuilding on the waterfront and tens of thousands of new residents are moving in, a risky proposition.) A large percentage of people in these SI waterfront areas decided to take the buyout offers. 


The sources for this research included the following, as well as articles from the Economist:

https://www.theguardian.com/us-news/2017/oct/27/hurricane-sandy-five-years-later-climate-change

https://ny.curbed.com/2017/10/27/16554180/hurricane-sandy-relief-build-it-back-housing

http://www.nyc.gov/html/recovery/downloads/pdf/october_2017_build_it_ 

https://www.nytimes.com/2017/10/29/nyregion/hurricane-sandy-5-years-rebuilding.html

https://ny.curbed.com/2016/10/27/13431288/hurricane-sandy-staten-island-wetlands-climate-change

https://stormrecovery.ny.gov/housing/buyout-acquisition-programs

(By looking into the sources of a Sandy $ damages table in the original research report that started off the project, we also found a report from Moodys Analytics that showed losses due to Sandy by sector, assets exposed to flooding, etc, which might be useful later.)

THIRD WEEK The next goal was to develop a sketch for the website and the main data visualization. We decided we would focus our analysis on one of these three devastated waterfront areas in SI, Oakland Beach, to keep the number of lots manageable for the data analysis and visualization. This area saw the most dramatic changes since the hurricane due to the state buyout and wetlands transformation program.

All together, our study site includes 1284 lots in 2009 (before Sandy) and 1276 in 2017 (the most recent year of data available): we extracted this data from PLUTO. 

We were able to find out which owner names referred to both the city and state recovery programs:

NY State Government
OwnerName = 'HOUSING TRUST FUND COR' OR 'HOUSING TRUST FUND CO' OR 'HOUSING TRUST FUN COR' OR 'HOUSING TRSUT FUND CO' OR  'HOSUING TRUST FUND CO' OR 'HOSING TRUST FUND COR'

Build it Back Program 
OwnerName = 'PROJECT REBUILD, INC.’

NY City Government (excluding Build it Back)
OwnerName = 'DEPT EVIRONMETAL PROT' OR OwnerName = 'DEPT OF ENVIRONMENTAL' OR OwnerName = 'NYC DEP' 

OwnerName = 'PROL PROPERTIES CORPO'

OwnerName = 'DCAS'

OwnerName = 'CITY OF NEW YORK'

Private Land Owners
OwnerName = 'JULIA KARTEN' OR 'I COHEN'

We generated a pivot table (and chart) to explore ownership changes after Sandy, which was in 2012:  

Year	DEP	Housing Trust	Prol Props	DCAS		Build it back	
2012	210		0				43		38		
2015	239		347				43		36			
2016	252		478				43		44			
2017	315		550				43		37				19	

City of New York						
	8						
	8						
	42						
	41						
	35			

This is preliminary: we will later include private ownership and vacant lots as well. And in the final deliverable we will trace back the homes in our study site back to 2009, a few years before Sandy. 			
							
For the first data visualization we decided to make a huge interactive chart called Razing NYC of all the lots in our study site over time, from 2009 to 2017.  We will show how the lots change ownership during this time, and when and if the homes on the lots are demolished. 

They are color coded by type of owner: 

Private Owners = 0	
Housing Trust Co = 1	  (state)
Project Rebuilt, Inc = 2	(city)
Dep. En. Protection = 3	 (city agency)
DCAS = 4 	              (city agency)
Prol Properties Corpo = 5	(this is a real estate company, so these homes were likely rentals)
Dead couple (I Cohen, Julia Karten) = 6	

We may add, cut or change some of these fields in our classification scheme as we learn more about the ownership data. It may be that there will be a Rental category made up of Prol Properties and other real estate companies, for example. 

A vertical red line at 2012 in the chart will indicate when Sandy hit. When a lot is bought by the state (or city in some cases) it will change color to indicate that, and when a home is demolished its (the lot's) color will be faded out. So if the lot was originally blue in the chart, the lot will look like a very light faded blue if/when it is demolished. 

The interactive element: when you hover over one of the rectangles / bands representing one of the lots, it will pull up a photo of what the building at that lot looks like now. The photo will appear in a box to the right of the chart. 

The chart should also reveal the homes where people have refused the buyout program, and who are therefore living in isolated, perhaps dilapidated homes. The status and number of these homes is a sub-topic that we will explore further as we do more data analysis. 

In addition to the huge interactive chart, we will have a color coded map that shows which parts of Staten Island are owned by which entity (city, state, private, etc). That way people can see where the homes are located spatially. 

And there will also be a graphic, perhaps a line chart, that indicates how ownership changed over time in the aggregate. So there will be one line for each of the major owners, and we will see in which years they bought or increased their buying of homes. 

Those are the main visualizations developed for the sketches.

There will also be an introduction section that will set the stage by describing the destruction caused by Sandy, explain what happened to Oakwood Beach, and explain the different city and state programs, etc. The intro and other explanatory elements will offer a narrative frame for the visualizations. There will also be relevant photos from Oakwood Beach, such as a home destroyed by Sandy, a home being demolished by the state, ducks and geese who have moved back in, and jack a lantern homes. 

We may decide to animate some of these explanatory or introduction elements so that they pop up in sync to scrolling or when the mouse hovers over a certain area of the website, or else we will just have nicely laid out introductory and concluding (and/or additional explanatory) sections. 

The initial website sketch can be seen at https://kkkddder.github.io/BuildingNYC/Ass2.html  

FOURTH WEEK 
We worked on creating a working prototype of our website, and refining our ideas and the layout in various ways. We decided to zero in on the lots in Oakland Beach that were closest to the shore and suffered the most damage from the storm. We started with: 

2009 - 843 lots
2017 - 834 lots

But some of these lots had missing information (including ownership and assessed values), so we excluded those lots as part of the data cleaning process. So in the end we had a total of 831 lots for our study site.

By using the latitude and longitude data for each lot in PLUTO (2017), we were able to find the centroid of each lot in GIS. Then we used those coordinates in a Google Maps API to download satellite imagery for each lot. 

We used p5.js to create the large visualization that allows people to hover over each lot and see what each one looks like now (using that 2017 satellite imagery).

We refined our legend scheme so that it includes: Private Property, State Owned (Housing Trust), Build it Back, SI Blue Belt, and Other Municipal Ownership. In the p5 sketch, we first checked for ownership by each of these programs (after first recoding the data in an Excel file).

Then we checked the Building Area data column in PLUTO. If it was zero, that indicates that the lot is vacant. If a building area went to 0 in 2013, we concluded that it was destroyed by Sandy (since the hurricane struck in Oct 2012). If the building area went to 0 in succeeding years, we considered those demolitions. The chart aims to make dramatically visible trends in the timing and effect of the state buy out program, which involved first buying the land and buildings, and then demolishing the homes to make way for wetlands. As will be visible in our graphic, houses bought by the state sometimes stood empty for years until the demolition occured. 

We were able to make a working prototype. We had changed some of the colors and put in a pop up window for those who wanted to dig deeper into the Oakwood Beach story. That window included photographs for each stage in the narrative. 

The placement and color scheme were prelimnary: we were mainly focused on getting all the info and making the prototype work in an interactive and smooth manner. One question was whether to make the satellite image fixed or relative; if it was fixed we could use the third column real estate, but in the end we preferred the other approach.

FIFTH WEEK: 

We redesigned the layout, rewrote the narrative to work more closely with the visualization categories (adding a SI Blue Belt paragraph, for example), added a title image and end image, changed the photographs to black and white, etc. 

We made a clickable program that highlights and sorts lots by different properties: distance from the beach, total assessed value, and size of the lot. Originally we were going to offer buttons to re-sort the main visualization in these three ways. We later decided to do the resorting on three smaller versions of the main visualization. We put these smaller versions, ordered differently, next to each other in order to make patterns in buyouts and timing more visible.

We wrote text explaining the key takeaways from each of the three versions. 

We also created a statistical panel that indicated ownership trends over time. After discussion, we turned this panel into a line chart which we thought would be more visually effective. Different colored lines indicate five different ownership options: governor's office; SI Blue Belt; Buy it Back; vacant. 

We made a year bar at the top that stays at the top of the computer screen when users scroll down.



REFLECTIONS

One of the key decisions we made was deciding to focus on a very dramatic incident of natural human interest, hurricane Sandy. The PLUTO data is rich and easily accessible, and there was a lot of context and competing agendas and elements that made this a rich story. By focusing on one neighborhood with particulary dramatic changes.. 



