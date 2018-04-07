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
2018 Pluto

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


The next step was to find PLUTO data for a range of years, from 2009 to 2017. Originally we were looking at Staten Island and Queens, and we did initial data analysis on the attributes discussed above, generating descriptive statistics and charts on Assessed Total Value, Total Building Floor Area, Years Altered, and Number of Floors for 10,000 lots. We also pulled out owner information for Queens and Staten Island.

Further research narrowed down the geographical area of interest. We learned that there were two main programs that served the victims of Superstorm Sandy. One was city run and called Build it Back, and was focused on rebuilding and sometimes elevating damaged houses through contractors ususally managed by the city.  This program had some successes but was also plagued by problems. Immigrants in the affected areas did not know about the program at first, there were not enough resources devoted to the program, and contractors had a hard time making homes storm-proof within the alloted budget, among other things. Several years later, there were still issues. When DeBlasio took over he allocated more resources to the program, but even with that, only 87% of the eligible homes have been  rebuilt.

The second main program was run by the state government. It invested $200 million to buy back the land / damaged homes at pre-Sandy rates in three devastated areas of Staten Island: Oakwood Beach, Ocean Breeze, and Graham Beach. The plan was to demolish those battered homes and rewild the land (seeding it), returning it to wetlands. (This strategy is called managed retreat.) The upside here was two-fold: people could quickly move on with their lives, and the program eliminated the risk of future damage from storms in this waterfront area., because the land is restored to its natural floodplain function. (Other areas in NYC such as Williamsburg, Greenpoint, and Long Island City are rebuilding on the waterfront and tens of thousands of new residents are moving in, a risky proposition.) A large percentage of people in these SI waterfront areas decided to take the buyout offers. 


The sources for this research included the following, as well as articles from the Economist:

https://www.theguardian.com/us-news/2017/oct/27/hurricane-sandy-five-years-later-climate-change

https://ny.curbed.com/2017/10/27/16554180/hurricane-sandy-relief-build-it-back-housing

http://www.nyc.gov/html/recovery/downloads/pdf/october_2017_build_it_ 

https://www.nytimes.com/2017/10/29/nyregion/hurricane-sandy-5-years-rebuilding.html

https://ny.curbed.com/2016/10/27/13431288/hurricane-sandy-staten-island-wetlands-climate-change

https://stormrecovery.ny.gov/housing/buyout-acquisition-programs

(By looking into the sources of a Sandy $ damages table in the original research report that started off the project, we also found a report from Moodys Analytics that showed losses due to Sandy by sector, assets exposed to flooding, etc, which might be useful later.)

We decided we would focus our analysis on one of these three devastated waterfront areas in SI, Oakland Beach, to keep the number of lots manageable for the data analysis and visualization. 

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
							
For the first data visualization we decided to make a huge interactive chart called Razing NYC (or actually Razing Oakland Beach) of all the lots in our study site over time, from 2009 to 2017.  We will show how the lots change ownership during this time, and when and if the homes on the lots are demolished. 

They are color coded by type of owner: 

Private Owners = 0	
Housing Trust Co = 1	  (state)
Project Rebuilt, Inc = 2	(city)
Dep. En. Protection = 3	 (city agency)
DCAS = 4 	              (city agency)
Prol Properties Corpo = 5	(this is a real estate company, so these homes were likely rentals)
Dead couple (I Cohen, Julia Karten) = 6	

We may add or change some of these fields in our classification scheme as we learn more about the ownership data. It may be that there will be a Rental category made up of Prol Properties and other real estate companies, for example. 

A vertical red line at 2012 in the chart will indicate when Sandy hit. When a lot is bought by the state (or city in some cases) it will change color to indicate that, and when a home is demolished its (the lot's) color will be faded out. So if the lot was originally blue in the chart, the lot will look like a very light faded blue if/when it is demolished. 

The interactive element: when you hover over one of the rectangles / bands representing one of the lots, it will pull up a photo of what the building at that lot looks like now. The photo will appear in a box to the right of the chart. 


The chart should also reveal the homes that are so-called jack a lanterns: homes where people have refused the buyout program, and who are therefore living in isolated, perhaps dilapidated homes. The status and number of these homes is a sub-topic that we will explore further as we do more data analysis. 

In addition to the huge interactive chart, we will have a color coded map that shows which parts of Staten Island are owned by which entity (city, state, private, etc). That way people can see where the homes are located spatially. 

And there will also be a graphic, perhaps a line chart, that indicates how ownership changed over time in the aggregate. So there will be one line for each of the major owners, and we will see in which years they bought or increased their buying of homes. 

Those are the main visualizations developed for the sketches.

There will also be an introduction section that will  set the stage by describing the destruction caused by Sandy, explain what happened to Oakwood Beach, and explain the different city and state programs, etc. The intro and other explanatory elements will offer a narrative frame for the visualizations. There will also be relevant photos from Oakwood Beach, such as a home destroyed by Sandy, a home being demolished by the state, ducks and geese who have moved back in, and jack a lantern homes. 

We may decide to animate some of these explanatory or introduction elements so that they pop up in sync to scrolling or when the mouse hovers over a certain area of the website, or else we will just have nicely laid out introductory and concluding (and/or additional explanatory) sections. 


