var config = {
  style: "mapbox://styles/daltonwb/cmffngv3f000q01qp82dq5g31",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  projection: "globe",
  inset: false,
  insetOptions: {
    markerColor: '#a4343a'
  },
  insetPosition: 'bottom-left',
  use3dTerrain: false,
  auto: false,
  title: '<h1>Ten Challenges for the UN in 2025–2026</h1><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/webm">',
  subtitle: 'World leaders arriving in New York for the UN General Assembly in September will find a world organisation in trauma. Funding cuts have hit hard, and the wider UN membership faces tough choices about how to manage the fall out. Despite long-term questions over its future, the UN can still play a major role in a wide range of countries, conflicts and areas of work.',
  start: 'BEGIN',
  footer:
    '<h4>Credits</h4><br /><br /><strong>Lead Contributors</strong>: Regional Program staff, the UN Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: <a href="https://www.linkedin.com/in/pkfranz" target="_blank">Paul Franz</a>, <a href="https://www.linkedin.com/in/claireboccongibod/" target="_blank">Claire Boccon-Gibod</a>, Sofia Nunes Aureli.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "An Organisation in Trauma",
      image: "",
      legendId: 'fundingLegend',
      description:
        "U.S. aid cuts and freezes have hit the UN hard, forcing the organisation into sweeping reductions in both staff and programming. Humanitarian aid operations have been hit the hardest, impairing the UN’s ability to deliver life-saving assistance to civilians in conflict settings. The UN’s other members have not filled the financial gaps that Washington left behind." +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [34.589385, 24.578897],
        zoom: 3.25,
        pitch: 57,
        bearing: -44,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: 'disableFreetime',
      onChapterEnter: [
        {
          layer: "un_funding",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "un_funding",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PALESTINE",
      alignment: "left",
      hidden: false,
      title: "Safeguarding UN assistance to Palestine",
      image: "",
      legendId: 'gazaLegend',
      description:
        "Despite Israeli pushback on UN assistance to Gaza, the General Assembly can serve as a clearinghouse for concrete pledges to apply material pressure on Israel. Notably, 124 member states voted in favour of a September 2024 General Assembly resolution that builds on the International Court of Justice’s advisory opinion asserting the illegality of Israeli’s continued occupation of the Palestinian territories, and lays out legal duties that member states can act upon." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130928" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [26.04134, 21.99575],
        zoom: 2.4,
        pitch: 0,
        bearing: 0,
        speed: .5
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "country-vote-poly",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "extra-countries",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "vote-borders",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "SUDAN_LABEL",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "country-vote-poly",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "extra-countries",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "vote-borders",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "A Surge in Humanitarian Diplomacy for Sudan",
      image: "",
      legendId: 'sudanLegend',
      description:
        "Unrelenting fighting has devastated much of Sudan. In December 2024 the UN’s famine watchdog organisation – or the Integrated Food Security Phase Classification (IPC) – detected famine in parts of the Darfur and Kordofan regions, and said recently that other areas are now at risk. The UN should not delay in pushing for an improved humanitarian response, while standing ready to re-engage with political negotiations if and when they resume." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130932" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [22.22724, 13.4534],
        zoom: 16.5,
        pitch: 20,
        bearing: 0,
        speed: 0.6,
        bbox: [
          [18.0, 5.0],
          [42.0, 25.0]
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "SUDAN_LABEL",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-emergency",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-crisis",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-stressed",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-no-data",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "sudan-emergency",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-crisis",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-stressed",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-no-data",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SUDAN-2",
      alignment: "left",
      hidden: false,
      title: "A Surge in Humanitarian Diplomacy for Sudan",
      image: "",
      legendId: 'sudanLegend',
      description:
        "Unrelenting fighting has devastated much of Sudan. In December 2024 the UN’s famine watchdog organisation – or the Integrated Food Security Phase Classification (IPC) – detected famine in parts of the Darfur and Kordofan regions, and said recently that other areas are now at risk. The UN should not delay in pushing for an improved humanitarian response, while standing ready to re-engage with political negotiations if and when they resume." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130932" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [22.22724, 13.4534],
        zoom: 16.5,
        pitch: 20,
        bearing: 0,
        speed: 0.6,
        bbox: [
          [18.0, 5.0],
          [42.0, 25.0]
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "SUDAN_LABEL",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-famine-may",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-emergency-may",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-crisis-may",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-stressed-may",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-no-data-may",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "sudan-famine-may",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-emergency-may",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-crisis-may",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-stressed-may",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-no-data-may",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "SUDAN_LABEL",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SYRIA",
      alignment: "center",
      hidden: false,
      title: "Resetting the UN’s Approach to Syria",
      image: "",
      legendId: '',
      description:
        "The UN has been recalculating its engagement in Syria since the ouster of President Bashar al-Assad in December 2024. It may have only a small window of opportunity to demonstrate that the UN can be a helpful partner as Syria tries to emerge from war and authoritarian rule. Steps should be taken to expand the UN’s presence in Damascus and lift UN sanctions on the new authorities." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130936" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/syria.jpg' /><p class='photocaption'>People attend the event of raising the new Syrian government flag for the first time, outside United Nations Headquarters in New York, U.S., April 25, 2025. REUTERS / Eduardo Munoz</p>",
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
      onChapterEnter: [
        {
          layer: "syria-fill",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "syria-fill",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Reviving International Assistance to Haiti",
      image: "",
      legendId: 'haitiLegend',
      description:
        "Security across Haiti has deteriorated since the Kenyan-led Multinational Security Support Mission (MSS) deployed in June 2024: armed gangs are active in about 90 per cent of the capital Port-au-Prince and they control vital economic routes outside the city. Members of the Security Council are now debating whether to transform the MSS into a larger “Gang-Suppression Force” proposed by the U.S." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130940" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.30001, 18.48639],
        zoom: 11.5,
        pitch: 67,
        bearing: -176,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
        {
          layer: "HAITI_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "pop_label",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "HAITI_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "pop_label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "AFGHAN",
      alignment: "center",
      hidden: false,
      title: "Updating Sanctions on the Afghan Taliban",
      image: "",
      description:
        "The mandate of the Security Council’s sanctions regime against the Taliban – comprising an arms embargo, travel bans and asset freezes – has not been updated since 2015 and contains many anachronisms. Updating the sanctions regime could help the Council nudge the Taliban towards modest changes in their behaviour and offer the UN a belated diplomatic opportunity to influence Afghanistan’s trajectory." + '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130944" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/colombia.jpg' /><p class='photocaption'>A view of Tumaco, in Nariño, Colombia, where factions of FARC dissidents have clashed to control the illicit economy. January 2023. CRISIS GROUP / Elizabeth Dickinson</p>",
      location: {
        center: [65.75493, 34.10071],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        speed: .7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "afghanistan-fill",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "afghanistan-fill",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "DRC",
      alignment: "left",
      hidden: false,
      title: "Adjusting MONUSCO’s Role in the Eastern DRC",
      image: "",
      legendId: '',
      description:
        "The Security Council will vote in December on a new mandate for MONUSCO, the blue helmet mission in the Eastern DRC, nearly a year after Rwandan-backed M23 rebels captured the capitals of the North Kivu and South Kivu provinces. The UN still has a role to play in the region, especially if the parties comply with a long-promised ceasefire." + "<div class='spacer'></div>" + "M23 rebels captured the Goma airport as part of their assault on the capital city of North Kivu. This is a view of the airport before the takeover." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130948" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [29.23758, -1.65779],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "dec2024",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "dec2024",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "DRC-2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description:
        "<br />The airport runways are empty, replaced by barricades after the takeover of M23.",
      location: {
        center: [29.23758, -1.65779],
        zoom: 17,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "feb2025",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "feb2025",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Refocusing Attention on the Rohingya Refugee Crisis",
      image: "",
      legendId: 'myanmarLegend',
      description:
        "On 30 September, UN members will hold a special high-level conference in New York on the Rohingya crisis. While this gathering will cover both the situation in Myanmar’s Rakhine State and questions related to the humanitarian response across the border, participants should also focus on insecurity in the refugee camps in Bangladesh." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130952" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [92.223778, 21.033171],
        zoom: 11.2,
        pitch: 14.5,
        bearing: 41,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "bazar_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "cox_area",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "bazar_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "cox_area",
          duration: 2000,
          opacity: 0,
        },
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
        "As budget cuts upend the UN system, sexual and reproductive health services in conflict zones are at particular risk. Donors should ringfence their remaining support for these health services, while working with the UN to intensify efforts to address the shortcomings in national healthcare systems." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130956" target="_blank">&#8594; [Read more]</a>' + '<br /><br />' + '<img src="images/gender.png" /><p class="photocaption"><strong>Source</strong>: Occupations such as midwifery are cost effective investments in boosting countries lasting capabilities, as they offer ways to fulfill <a href="https://www.unfpa.org/press/unfpa-warns- devastating-impact-funding-cuts-midwife-support-crisis-hit-countries" target="_blank">basic sexual and reproductive health care needs</a> at relatively low cost.</p>',
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
      legendId: '',
      description:
        "On 28 August, Britain, France and Germany (the JCPOA’s European signatories, known as the E3) triggered the snapback of previously suspended sanctions on Iran related to its nuclear and ballistic missile programs. The sanctions will come back into force unless the Council passes a resolution reaffirming their suspension by midnight of 28 September), leaving a critical (but slim) window for further negotiation." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130960" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [20.69195, 43.91663],
        zoom: 3,
        pitch: 32,
        bearing: 23,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: 'disableFreetime',
      onChapterEnter: [
        {
          layer: "uk-fill",
          duration: 2000,
          opacity: .6,
        },
        {
          layer: "iran-fill",
          duration: 2000,
          opacity: .6,
        },
        {
          layer: "germany-fill",
          duration: 2000,
          opacity: .6,
        },
        {
          layer: "france-fill",
          duration: 2000,
          opacity: .6,
        },
        {
          layer: "paris",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "berlin",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "london",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "paris_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "london_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "berlin_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "GERMANY",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "France",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "United Kingdom",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "vote-borders",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "uk-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "iran-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "germany-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "france-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "paris",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "berlin",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "london",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "paris_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "london_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "berlin_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "GERMANY",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "France",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "United Kingdom",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "UKRAINE",
      alignment: "left",
      hidden: false,
      title: "Scoping a Potential Role for the UN in Ukraine",
      image: "",
      legendId: 'ukraineLegend',
      description:
        "The Trump Administration shook up UN debates in February by opposing a Ukrainian- and European- drafted General Assembly resolution marking the war’s third anniversary and tabling an alternative in the Security Council calling for an early peace." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb13-ten-challenges-un-2025-2026#130964" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [5.63450, 19.76469],
        zoom: 2.4,
        pitch: 0,
        bearing: 0,
        speed: .7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "vote-borders",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "eu_vote",
          duration: 2000,
          opacity: .7,
        },
      ],
      onChapterExit: [
        {
          layer: "eu_vote",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "UKRAINE-2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      legendId: 'ukraineLegend2',
      description:
        "<br />Even though a settlement is not yet in view, UN officials and diplomats should think through possible roles for the organisation.",
      location: {
        center: [5.63450, 19.76469],
        zoom: 2.4,
        pitch: 0,
        bearing: 0,
        speed: .7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "us_vote",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "vote-borders",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "us_vote",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
  ],
};
