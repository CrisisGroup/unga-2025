var config = {
  style: "mapbox://styles/daltonwb/cmfe4vlnj00he01s5f3xs5dbo",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Challenges for the UN in 2025–2026</h1><p class="hedp">World leaders arriving in New York for the UN General Assembly in September will find a world organisation in trauma. Funding cuts have hit hard, and the wider UN membership faces tough choices about how to manage the fall out. Despite long-term questions over its future, the UN can still play a major role in a wide range of countries, conflicts and areas of work.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the UN Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod, Jorge Gutierrez Lucena and Emma Eva Schut <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "An Organisation in Trauma",
      image: "",
      description:
        "U.S. aid cuts and freezes have hit the UN hard, forcing the organisation into sweeping reductions in both staff and programming. Humanitarian aid operations have been hit the hardest, impairing the UN’s ability to deliver life-saving assistance to civilians in conflict settings. The UN’s other members have not filled the financial gaps that Washington left behind." +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [34.589385, 24.578897],
        zoom: 3.6,
        pitch: 57,
        bearing: -44,
        speed: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "PALESTINE",
      alignment: "left",
      hidden: false,
      title: "Safeguarding UN assistance to Palestine",
      image: "",
      description:
        "Despite Israeli pushback on UN assistance to Gaza, the General Assembly can serve as a clearinghouse for concrete pledges to apply material pressure on Israel. 124 member states voted in favour of a September 2024 General Assembly resolution that builds on the International Court of Justice’s advisory opinion asserting the illegality of Israeli’s continued occupation of the Palestinian territories, and lays out legal duties that member states can act upon.",
      location: {
        center: [-61.29315, 9.81898],
        zoom: 2,
        pitch: 18,
        bearing: 12,
        speed: .5
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "A Surge in Humanitarian Diplomacy for Sudan",
      image: "",
      description:
        "Unrelenting fighting has devastated much of Sudan. In December 2024 the IPC detected famine in parts of the Darfur and Kordofan regions, and said recently that other areas are now at risk. The UN should not delay in pushing for an improved humanitarian response, while standing ready to re-engage with political negotiations if and when they resume." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120468" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [22.22724, 13.4534],
        zoom: 16.5,
        pitch: 20,
        bearing: 0,
        speed: 0.6,
        bbox: [[21.8, 8.7], [38.6, 22.3]]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "SYRIA",
      alignment: "center",
      hidden: false,
      title: "Resetting the UN’s Approach to Syria",
      image: "",
      description:
        "The UN has been recalculating its engagement in Syria since the ouster of President Bashar al-Assad in December 2024. It may have only a small window of opportunity to demonstrate that the UN can be a helpful partner as Syria tries to emerge from war and authoritarian rule. Steps should be taken to expand the UN’s presence in Damascus and lift UN sanctions on the new authorities." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120472" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/myanmar.jpg' /><p class='photocaption'>A member of the ethnic armed group Ta’ang National Liberation Army (TNLA) keeping watch as people buy groceries at a street market in Kyaukme in Myanmar’s northern Shan State. July 2024. STR / AFP.</p>",
      location: {
        center: [38.9968, 35.0143],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Reviving International Assistance to Haiti",
      image: "",
      description:
        "Security across Haiti has deteriorated since the Kenyan-led Multinational Security Support Mission (MSS) deployed in June 2024: armed gangs are active in about 90 per cent of the capital Port-au-Prince and they control vital economic routes outside the city. Members of the Security Council are now debating whether to transform the MSS into a larger “Gang-Suppression Force” proposed by the U.S." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120476" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.30001, 18.48639],
        zoom: 11.5,
        pitch: 67,
        bearing: -176,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
 
      ],
      onChapterExit: [
 
      ],
    },
    {
      id: "AFGHAN",
      alignment: "center",
      hidden: false,
      title: "Updating Sanctions on the Afghan Taliban",
      image: "",
      description:
        "The mandate of the Security Council’s sanctions regime against the Taliban - comprising an arms embargo, travel bans and asset freezes - has not been updated since 2015 and contains many anachronisms. Updating the sanctions regime could help the Council nudge the Taliban towards modest changes in their behaviour and offer the UN a belated diplomatic opportunity to influence Afghanistan’s trajectory." + '<div class="spacer"></div>' + 
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120480" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/colombia.jpg' /><p class='photocaption'>A view of Tumaco, in Nariño, Colombia, where factions of FARC dissidents have clashed to control the illicit economy. January 2023. CRISIS GROUP / Elizabeth Dickinson</p>",
      location: {
        center: [-74.09794, 4.69284],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [],
    },
    {
      id: "DRC",
      alignment: "left",
      hidden: false,
      title: "Adjusting MONUSCO’s Role in the Eastern DRC",
      image: "",
      description:
        "The Security Council will vote in December on a new mandate for MONUSCO, the blue helmet mission in the Eastern DRC, nearly a year after Rwandan-backed M23 rebels captured the capitals of the North Kivu and South Kivu provinces. The UN still has a role to play in the region, especially if the parties comply with a long-promised ceasefire." + "<div class='spacer'></div>" + "This map shows countries currently hosting UN peacekeeping missions, AU-authorised peace support operations and regional security operations." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120484" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [12.27552, 10.15932],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Refocusing Attention on the Rohingya Refugee Crisis",
      image: "",
      description:
        " On 30 September, UN members will hold a special high-level conference in New York on the Rohingya crisis. While this gathering will cover both the situation in Myanmar’s Rakhine State and questions related to the humanitarian response across the border, participants should also focus on insecurity in the refugee camps in Bangladesh." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120488" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-28.58292, 10.67017],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "GENDER",
      alignment: "center",
      hidden: false,
      title:
        "Meeting Sexual and Reproductive Health Needs in Conflict Settings",
      image: "",
      description:
        "As budget cuts upend the UN system, sexual and reproductive health services in conflict zones are at particular risk. Donors should ringfence their remaining support for these health services, while working with the UN to intensify efforts to address the shortcomings in national healthcare systems." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120492" target="_blank">&#8594; [Read more]</a>' + '<br /><br />' + '<img src="images/terror_aid.png" /><br /><br />',
        location: {
          center: [-28.58292, 10.67017],
          zoom: 2,
          pitch: 0,
          bearing: 0,
          speed: 0.6,
        },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
       
      ],
      onChapterExit: [

      ],
    },
    {
      id: "IRAN",
      alignment: "left",
      hidden: false,
      title: "Managing the Fallout of Snapback Sanctions on Iran",
      image: "",
      description:
        "On 28 August, Britain, France and Germany (the JCPOA’s European signatories, known as the E3) triggered the snapback of previously suspended sanctions on Iran related to its nuclear and ballistic missile programs.  The sanctions will come back into force unless the Council passes a resolution reaffirming their suspension by midnight of 28 September), leaving a critical (but slim) window for further negotiation." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120498" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-77.03653, 38.89763],
        zoom: 16.75,
        pitch: 57,
        bearing: 17.6,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
    {
      id: "UKRAINE",
      alignment: "left",
      hidden: false,
      title: "Scoping a Potential Role for the UN in Ukraine",
      image: "",
      description:
        "The Trump Administration shook up UN debates in February by opposing a Ukrainian- and European- drafted General Assembly resolution marking the war’s third anniversary and tabling an alternative in the Security Council calling for an early peace. Even though a settlement is not yet in view, UN officials and diplomats should think through possible roles for the organisation." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120502" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-73.96756, 40.75006],
        zoom: 16,
        pitch: 62,
        bearing: -44,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [

      ],
    },
  ],
};
