var config = {
  style: "mapbox://styles/daltonwb/cm1ak8yls00v401pd1j69ckmc",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Challenges for the UN in 2025–2026</h1><p class="hedp">Lorem ipsum. Esse in fugiat qui labore mollit elit culpa anim.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the UN Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod, Jorge Gutierrez Lucena and Emma Eva Schut <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "PS",
      alignment: "left",
      hidden: false,
      title: "Safeguarding UN assistance to Palestine",
      image: "",
      description:
        "The UN Relief and Works Agency for Palestine Refugees in the Near East provides the main logistics hub <a href='https://www.unrwa.org/what-we-do/gaza-supplies-and-dispatch-tracking' target='_blank'>for aid into Gaza</a>. Israel has shuttered many of the crossings into Gaza, and humanitarian agencies have been able to use only two – Kerem Shalom and Gate 96 – since the end of July." +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [34.31234, 31.37974],
        zoom: 10.5,
        pitch: 32.5,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "palestine",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "palestine_2",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "open-crossings",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "closed-crossings",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "palestine_2",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "open-crossings",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "closed-crossings",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "Surging Humanitarian Diplomacy for Sudan",
      image: "",
      description:
        "The Secretary-General’s Personal Envoy Ramtane Lamamra convened representatives of the Sudanese army and Rapid Support Forces (RSF) for proximity talks on humanitarian issues in Geneva in July. This meeting helped pave the way for an agreement between the belligerents one month later to reopen a humanitarian corridor through Adre, a Chadian border city, into the RSF-held Western Darfur region of Sudan." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120468" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [22.22724, 13.4534],
        zoom: 16.5,
        pitch: 20,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "adre_dot",
          duration: 7000,
          opacity: 1,
        },
        {
          layer: "adre_label",
          duration: 7000,
          opacity: 1,
        },
        {
          layer: "adre_blur",
          duration: 7000,
          opacity: 1,
        },
        {
          layer: "SUDAN-LABEL",
          duration: 1000,
          opacity: 1,
        },
        {
          layer: "CHAD",
          duration: 1000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "adre_dot",
          duration: 1000,
          opacity: 0,
        },
        {
          layer: "adre_label",
          duration: 1000,
          opacity: 0,
        },
        {
          layer: "adre_blur",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "SUDAN-LABEL",
          duration: 1000,
          opacity: 0,
        },
        {
          layer: "CHAD",
          duration: 1000,
          opacity: 0,
        }
      ],
    },
    {
      id: "SYRIA",
      alignment: "center",
      hidden: false,
      title: "Resetting the UN’s approach to Syria",
      image: "",
      description:
        "With violence rising across much of the country over the last year, and the army and its proxies often finding themselves forced onto the back foot by ethnic armed groups and post-coup resistance forces, the UN should strengthen its ability to deliver aid to vulnerable populations and bolster its diplomatic efforts in the region." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120472" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/myanmar.jpg' /><p class='photocaption'>A member of the ethnic armed group Ta’ang National Liberation Army (TNLA) keeping watch as people buy groceries at a street market in Kyaukme in Myanmar’s northern Shan State. July 2024. STR / AFP.</p>",
      location: {
        center: [95.588857, 22.595168],
        zoom: 3,
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
        "The most pressing question for Haiti revolves around the Multinational Security Support Mission operational profile, funding and future. Once sufficiently equipped and staffed, the mission should endeavour to help police protect the capital’s critical infrastructure and step up operations against gang strongholds, with a view both to tempering the country’s humanitarian crisis and providing a safe environment for holding elections." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120476" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.277873, 18.57867],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tla-dot",
          duration: 7000,
          opacity: 1,
        },
        {
          layer: "tla-label",
          duration: 7000,
          opacity: 1,
        },
        {
          layer: "tla-dot blur",
          duration: 7000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "tla-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tla-label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tla-dot blur",
          duration: 7000,
          opacity: 0,
        }
      ],
    },
    {
      id: "AFGHAN",
      alignment: "center",
      hidden: false,
      title: "Updating the UN Sanctions Regime against the Taliban in Afghanistan",
      image: "",
      description:
        "The UN has an opportunity to step in to boost measures to protect women, drawing on its mandate to support the 2016 peace agreement and to accompany new talks with armed and criminal groups. At the same time, the organisation should seek to revitalise existing commitments to bolster women’s participation in politics and peacebuilding, which have flagged over recent years but remain critical to rectifying the historical exclusion of marginalised groups and achieving equitable peace." + '<div class="spacer"></div>' + 
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
        {
          layer: "unga-missions",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },
    {
      id: "DRC",
      alignment: "left",
      hidden: false,
      title: "Adjusting MONUSCO’s role in the Eastern DRC",
      image: "",
      description:
        "The UN is downsizing its peacekeeping missions in Africa, where it has run most of its peace operations over the last quarter-century. As a result, the Security Council and wider UN membership are grappling with the question of how the UN can contribute to stability on the continent in the future, including what role blue helmet missions might play and how operational and financial support could be provided to African-led deployments." + "<div class='spacer'></div>" + "This map shows countries currently hosting UN peacekeeping missions, AU-authorised peace support operations and regional security operations." +
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
        {
          layer: "unga-missions",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "unga-missions",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Refocusing Attention on the Rohingya Refugee Crisis",
      image: "",
      description:
        "The Peacebuilding Fund, one part of the UN's peacebuilding architecture, has a good reputation for providing limited but speedy financing for local peace talks and bolstering countries’ justice systems. Although the Fund sometimes backs projects in places where the UN already has peace operations, it also funds UN efforts in states – such as Burkina Faso and Papua New Guinea – where the organisation has no political presence." + "<div class='spacer'></div>" + "The map shows countries receiving UN peacebuilding fund allocations in 2023 (source: A/78/779)." +
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
        {
          layer: "peace_fund_countries",
          duration: 2000,
          opacity: .7,
        }
      ],
      onChapterExit: [
        {
          layer: "peace_fund_countries",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "GENDER",
      alignment: "center",
      hidden: false,
      title:
        "Responding to Sexual and Reproductive Health Needs in Armed Conflict",
      image: "",
      description:
        "The Security Council will vote in December on extending a humanitarian exemption for sanctions against al-Qaeda and the Islamic State. Resolution 2664, approved by the Council in 2022, has already exempted transactions carried out to support humanitarian activities from UN-mandated asset freezes, removing longstanding obstacles to aid delivery to ameliorate several of the world’s biggest humanitarian emergencies. Twelve of the countries where sanctioned groups are active have major humanitarian operations that together serve more than 100 million people in need." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120492" target="_blank">&#8594; [Read more]</a>' + '<br /><br />' + '<img src="images/terror_aid.png" /><br /><br />',
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
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "unga-missions",
          duration: 3000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "unga-missions",
          duration: 4000,
          opacity: 0,
        }
      ],
    },
    {
      id: "IRAN",
      alignment: "left",
      hidden: false,
      title: "Managing the Fall Out of Snapback Sanctions on Iran",
      image: "",
      description:
        "Despite the host of headaches facing the UN, ambassadors and international officials acknowledge that November’s U.S. elections could present them with a raft of new problems, depending on the outcome. The ups-and-downs of U.S. relations with the UN during both the Trump and Biden terms should be instructive for other UN members. As future U.S. administrations reassess their global posture, their investment in international organisations is liable to fluctuate. U.S. backing for a strong UN is not guaranteed under any president." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120498" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-77.03653, 38.89763],
        zoom: 16.75,
        pitch: 57,
        bearing: 17.6,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "UKRAINE",
      alignment: "left",
      hidden: false,
      title: "Scoping a potential role for the UN in Ukraine",
      image: "",
      description:
        "The race to replace António Guterres as UN Secretary-General will heat up in the year ahead. Though the Security Council and General Assembly are unlikely to select his successor more than a few months before his term ends on 31 December 2026, a shadow race is already under way as potential candidates stake claims to lead the organisation. The eventual winner will play an important role in shaping the UN’s role in peace and security over the coming decade." + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120502" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-73.96756, 40.75006],
        zoom: 16,
        pitch: 62,
        bearing: -44,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
  ],
};
