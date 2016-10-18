var app = angular.module('app',['ngRoute']);

app.controller('elementsCTRL', function($scope, wikiLinks){

$scope.get= function(ele){
  wikiLinks.getWikiElement(ele)
  .then(function(result){
    
    $scope.result = result.data.query.pages;
    for(var key in $scope.result){
      $scope.result = $scope.result[key].extract;
      console.log(typeof $scope.result)
    }
    
  })
  .catch(function(error){
    console.error(error);
  });
};
$scope.row1 = [

  {
    aNum:1,
    name: 'Hydrogen',
    symbol:'H',
    aMass: 1.008
  },
   {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  {
    aNum:2,
    name: 'Helium',
    symbol:'He',
    aMass: 4.0026,
  },
  ];
 
  $scope.row2 = [
    {
    aNum:3,
    name: 'Lithium',
    symbol:'Li',
    aMass: 6.94
    },
    {
    aNum:4,
    name: 'Beryllium',
    symbol:'Be',
    aMass: 9.0121,
    },

   {},{},{},{},{},{},{},{},{},{},
   {
    aNum:5,
    name: 'Boron',
    symbol:'B',
    aMass: 10.81,

   },
   {
    aNum:6,
    name: 'Carbon',
    symbol:'C',
    aMass: 12.011,

   },

   {
    aNum:7,
    name: 'Nirtogen',
    symbol:'N',
    aMass: 14.007,
   },

   {
    aNum:8,
    name: 'Oxygen',
    symbol:'O',
    aMass: 15.999,
   },

   {
    aNum:9,
    name: 'Fluorine',
    symbol:'F',
    aMass: 18.998,
   },
   {
    aNum:10,
    name: 'Neon',
    symbol:'Ne',
    aMass: 20.1797,
  },
  
  ]

  $scope.row3 = [
    {
    aNum:11,
    name: 'Sodium',
    symbol:'Na',
    aMass: 22.989
  },
   {
    aNum:12,
    name: 'Magnesium',
    symbol:'Mg',
    aMass: 24.305
   },

   {},{},{},{},{},{},{},{},{},{},
   {
    aNum:13,
    name: 'Aluminium',
    symbol:'Al',
    aMass: 26.981,
   },
   {
    aNum:14,
    name: 'Silicon',
    symbol:'Si',
    aMass: 28.085,
   },
   {
    aNum:15,
    name: 'Phosphorus',
    symbol:'P',
    aMass: 30.973,
   },
   {
    aNum:16,
    name: 'Sulfur',
    symbol:'S',
    aMass: 32.06,
   },
   {
    aNum:17,
    name: 'Chlorine',
    symbol:'Cl',
    aMass: 35.45,
   },
  {
    aNum:18,
    name: 'Argon',
    symbol:'Ar',
    aMass: 39.948,
  },
  ]
  
  $scope.row4 = [
    {
    aNum:19,
    name: 'Potassium',
    symbol:'K',
    aMass: 39.0983
    },
   {
    aNum:20,
    name: 'Calcium',
    symbol:'Ca',
    aMass: 40.078
   },
   {
    aNum:21,
    name: 'Scandium',
    symbol:'Sc',
    aMass: 44.955
   },
   {
    aNum:22,
    name: 'Titanium',
    symbol:'Ti',
    aMass: 47.867
   },
   {
    aNum:23,
    name: 'Vanadium',
    symbol:'V',
    aMass: 50.9415
   },
   {
    aNum:24,
    name: 'Chromium',
    symbol:'Cr',
    aMass: 51.9961
   },
   {
    aNum:25,
    name: 'Manganese',
    symbol:'Mn',
    aMass: 54.938
   },
   {
    aNum:26,
    name: 'Iron',
    symbol:'Fe',
    aMass: 55.845
   },
   {
    aNum:27,
    name: 'Cobalt',
    symbol:'Co',
    aMass: 58.933
   },
   {
    aNum:28,
    name: 'Nickel',
    symbol:'Ni',
    aMass: 58.6934
   },
   {
    aNum:29,
    name: 'Copper',
    symbol:'Cu',
    aMass: 63.546
   },
   {
    aNum:30,
    name: 'Zinc',
    symbol:'Zn',
    aMass:65.38 
   },
   {
    aNum:31,
    name: 'Gallium',
    symbol:'Ga',
    aMass: 69.723
   },
   {
    aNum:32,
    name: 'Germanium',
    symbol:'Ge',
    aMass: 72.63
   },
   {
    aNum:33,
    name: 'Arsenic',
    symbol:'As',
    aMass: 74.921
   },
   {
    aNum:34,
    name: 'Selenium',
    symbol:'Se',
    aMass: 78.971
   },
   {
    aNum:35,
    name: 'Bromine',
    symbol:'Br',
    aMass: 79.904
   },
   {
    aNum:36,
    name: 'Krypton',
    symbol:'Kr',
    aMass: 83.798,
   },
  ]

  $scope.row5 = [
    {
    aNum:37,
    name: 'Rubidium',
    symbol:'Rb',
    aMass:85.4678
    },
    {
    aNum:38,
    name: 'Strontium',
    symbol:'Sr',
    aMass:87.62
    },
    {
    aNum:39,
    name: 'Yttrium',
    symbol:'Y',
    aMass:88.90584
    },
    {
    aNum:40,
    name: 'Zirconium',
    symbol:'Zr',
    aMass:91.224
    },
    {
    aNum:41,
    name: 'Niobium',
    symbol:'Nb',
    aMass:92.90637
    },
    {
    aNum:42,
    name: 'Molybdenur',
    symbol:'Mo',
    aMass:95.95
    },
    {
    aNum:43,
    name: 'Technetium',
    symbol:'Tc',
    aMass:98
    },
    {
    aNum:44,
    name: 'Ruthenium',
    symbol:'Ru',
    aMass:101.07
    },
    {
    aNum:45,
    name: 'Rhodium',
    symbol:'Rh',
    aMass:102.90
    },
    {
    aNum:46,
    name: 'Palladium',
    symbol:'Pd',
    aMass:106.42
    },
    {
    aNum:47,
    name: 'Silver',
    symbol:'Ag',
    aMass:107.8682
    },
    {
    aNum:48,
    name: 'Cadmium',
    symbol:'Cd',
    aMass:112.414
    },
    {
    aNum:49,
    name: 'Indium',
    symbol:'In',
    aMass:114.818
    },
    {
    aNum:50,
    name: 'Tin',
    symbol:'Sn',
    aMass:118.710
    },
    {
    aNum:51,
    name: 'Antimony',
    symbol:'Sb',
    aMass:121.760
    },
    {
    aNum:52,
    name: 'Tellurium',
    symbol:'Te',
    aMass:127.60
    },
    {
    aNum:53,
    name: 'Iodine',
    symbol:'I',
    aMass:126.90
    },
    {
    aNum:54,
    name: 'Xenon',
    symbol:'xe',
    aMass:131.293
    },
  ]

  $scope.row6 = [
    {
    aNum:55,
    name: 'Caesium',
    symbol:'Cs',
    aMass:132.90
    },
    {
    aNum:56,
    name: 'Barium',
    symbol:'Ba',
    aMass:137.327
    },
    {
    aNum:'57-71',
    name: 'Lanthanoids',
    symbol:'',
    aMass:''
    },
    {
    aNum:72,
    name: 'Hafnium',
    symbol:'Hf',
    aMass:178.49
    },
    {
    aNum:73,
    name: 'Tantaium',
    symbol:'Ta',
    aMass:180.94
    },
    {
    aNum:74,
    name: 'Tungsten',
    symbol:'W',
    aMass:183.84
    },
    {
    aNum:75,
    name: 'Rhenium',
    symbol:'Re',
    aMass:186.207
    },
    {
    aNum:76,
    name: 'Osmium',
    symbol:'Os',
    aMass:190.23
    },
    {
    aNum:77,
    name: 'Iridium',
    symbol:'Ir',
    aMass: 192.217
    },
    {
    aNum:78,
    name: 'Platinum',
    symbol:'Pt',
    aMass:195.084
    },
    {
    aNum:79,
    name: 'Gold',
    symbol:'Au',
    aMass:196.96
    },
    {
    aNum:80,
    name: 'Mercury',
    symbol:'Hg',
    aMass:200.59
    },
    {
    aNum:81,
    name: 'Thallium',
    symbol:'Tl',
    aMass:204.38
    },
    {
    aNum:82,
    name: 'Lead',
    symbol:'Pb',
    aMass:207.2
    },
    {
    aNum:83,
    name: 'Bismuth',
    symbol:'Bi',
    aMass:208.98
    },
    {
    aNum:84,
    name: 'Polonium',
    symbol:'Po',
    aMass:209
    },
    {
    aNum:85,
    name: 'Astatine',
    symbol:'At',
    aMass:210
    },
    {
    aNum:86,
    name: 'Radon',
    symbol:'Rn',
    aMass:222
    },
  ]
  
  $scope.row7 = [
    {
    aNum:87,
    name: 'Francium',
    symbol:'Fr',
    aMass:223
    },
    {
    aNum:88,
    name: 'Radium',
    symbol:'Ra',
    aMass:226
    },
    {
    aNum:'89-103',
    name: 'Actinoids',
    symbol:'',
    aMass:''
    },
    {
    aNum:104,
    name: 'Ruthefordiu',
    symbol:'Rf',
    aMass:267
    },
    {
    aNum:105,
    name: 'Dubnium',
    symbol:'Db',
    aMass:268
    },
    {
    aNum:106,
    name: 'Seaborgium',
    symbol:'Sg',
    aMass:271
    },
    {
    aNum:107,
    name: 'Bohrium',
    symbol:'Bh',
    aMass:272
    },
    {
    aNum:108,
    name: 'Hassium',
    symbol:'Hs',
    aMass:270
    },
    {
    aNum:109,
    name: 'Meitnerium',
    symbol:'Mt',
    aMass:270
    },
    {
    aNum:110,
    name: 'Darmstadtium',
    symbol:'Ds',
    aMass:281
    },
    {
    aNum:111,
    name: 'Roentgenium',
    symbol:'Rg',
    aMass:280
    },
    {
    aNum:112,
    name: 'Copernicium',
    symbol:'Cn',
    aMass:285
    },
    {
    aNum:113,
    name: 'Nihonium',
    symbol:'Nh',
    aMass:284
    },
    {
    aNum:114,
    name: 'Flerovium',
    symbol:'Fl',
    aMass:289
    },
    {
    aNum:115,
    name: 'Moscovium',
    symbol:'Mc',
    aMass:288
    },
    {
    aNum:116,
    name: 'Livermorium',
    symbol:'Lv',
    aMass:293
    },
    {
    aNum:117,
    name: 'Tennessine',
    symbol:'Ts',
    aMass:294
    },
    {
    aNum:118,
    name: 'Oganesson',
    symbol:'Og',
    aMass:294
    },
  ]
})
  .factory('wikiLinks', function($http){
  
  var getWikiElement ={ 
    getWikiElement:function(element){
      return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&titles=' + element +
        '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK')
    },
  }


    return getWikiElement;
})
  // .config(function($routeProvider){
  //   $routeProvider
  //   .when('/wikiView', {
  //     templateUrl : '/views/wikiView.html',
  //     controller: 'elementsCTRL'
  //   })
  //   .otherwise({
  //     redirectTo: '/wikiView'
  //   })
  // })
