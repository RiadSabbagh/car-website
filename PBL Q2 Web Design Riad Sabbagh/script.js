



const carListings = [
    { make: "Toyota", model: "Camry", year: 2020, price: 20000, type: "Sedan", color: "Grey", country: "Japan", transmission: "Automatic", horsepower: 203, acceleration: 7.8, engineType: "Inline-4", image: "toyotaCamry2020.png" },
    { make: "Ford", model: "Mustang", year: 2021, price: 30000, type: "Convertible", color: "Orange", country: "USA", transmission: "Manual", horsepower: 450, acceleration: 4.3, engineType: "V8", image: "fordMustang2021.png" },
    { make: "BMW", model: "X5", year: 2023, price: 60000, type: "SUV", color: "White", country: "Germany", transmission: "Automatic", horsepower: 335, acceleration: 5.3, engineType: "V6", image: "bmwX52023.png" },
    { make: "Tesla", model: "Model 3", year: 2022, price: 45000, type: "Sedan", color: "Black", country: "USA", transmission: "Automatic", horsepower: 450, acceleration: 3.1, engineType: "Electric", image: "teslaModel32022.png" },
    { make: "Honda", model: "Civic", year: 2018, price: 18000, type: "Sedan", color: "Silver", country: "Japan", transmission: "Automatic", horsepower: 158, acceleration: 8.2, engineType: "Inline-4", image: "hondaCivic2018.png" },
    { make: "Jeep", model: "Cherokee", year: 2022, price: 35000, type: "SUV", color: "Black", country: "USA", transmission: "Automatic", horsepower: 271, acceleration: 7.5, engineType: "V6", image: "jeepCherokee2022.png" },
    { make: "Audi", model: "A4", year: 2021, price: 41000, type: "Sedan", color: "Blue", country: "Germany", transmission: "Automatic", horsepower: 261, acceleration: 5.1, engineType: "Inline-4", image: "audiA42021.png" },
    { make: "Chevrolet", model: "Corvette", year: 2023, price: 65000, type: "Coupe", color: "Red", country: "USA", transmission: "Automatic", horsepower: 495, acceleration: 2.9, engineType: "V8", image: "chevroletCorvette2023.png" },
    { make: "Kia", model: "Sportage", year: 2022, price: 28000, type: "SUV", color: "White", country: "South Korea", transmission: "Automatic", horsepower: 187, acceleration: 8.5, engineType: "Inline-4", image: "kiaSportage2022.png" },
    { make: "Hyundai", model: "Tucson", year: 2022, price: 27000, type: "SUV", color: "Black", country: "South Korea", transmission: "Automatic", horsepower: 187, acceleration: 8.8, engineType: "Inline-4", image: "hyundaiTucson2022.png" },
   
    { make: "Mazda", model: "CX-5", year: 2023, price: 33000, type: "SUV", color: "Red", country: "Japan", transmission: "Automatic", horsepower: 187, acceleration: 8.2, engineType: "Inline-4", image: "mazdaCX52023.png" },
    { make: "Volkswagen", model: "Golf GTI", year: 2022, price: 29000, type: "Hatchback", color: "Grey", country: "Germany", transmission: "Manual", horsepower: 241, acceleration: 5.6, engineType: "Inline-4", image: "volkswagenGolfGTI2022.png" },
    { make: "Nissan", model: "Altima", year: 2021, price: 25000, type: "Sedan", color: "Silver", country: "Japan", transmission: "Automatic", horsepower: 188, acceleration: 7.4, engineType: "Inline-4", image: "nissanAltima2021.png" },
    { make: "Porsche", model: "911 Carrera", year: 2023, price: 105000, type: "Coupe", color: "Yellow", country: "Germany", transmission: "Automatic", horsepower: 379, acceleration: 4.0, engineType: "Flat-6", image: "porsche911Carrera2023.png" },
    { make: "Mercedes-Benz", model: "GLE", year: 2023, price: 55000, type: "SUV", color: "Black", country: "Germany", transmission: "Automatic", horsepower: 255, acceleration: 7.1, engineType: "Inline-4", image: "mercedesGLE2023.png" },
    { make: "Subaru", model: "Outback", year: 2021, price: 27000, type: "Wagon", color: "Brown", country: "Japan", transmission: "Automatic", horsepower: 182, acceleration: 8.7, engineType: "Flat-4", image: "subaruOutback2021.png" },
    { make: "Toyota", model: "Corolla", year: 2016, price: 15000, type: "Sedan", color: "White", country: "Japan", transmission: "Automatic", horsepower: 132, acceleration: 9.0, engineType: "Inline-4", image: "toyotaCorolla2016.png" },
    { make: "Ford", model: "Fusion", year: 2017, price: 18000, type: "Sedan", color: "Blue", country: "USA", transmission: "Automatic", horsepower: 175, acceleration: 8.3, engineType: "Inline-4", image: "fordFusion2017.png" },
    { make: "Chevrolet", model: "Malibu", year: 2018, price: 19000, type: "Sedan", color: "Brown", country: "USA", transmission: "Automatic", horsepower: 160, acceleration: 8.5, engineType: "Inline-4", image: "chevroletMalibu2018.png" },
    { make: "Honda", model: "Accord", year: 2019, price: 22000, type: "Sedan", color: "Grey", country: "Japan", transmission: "Automatic", horsepower: 192, acceleration: 7.3, engineType: "Inline-4", image: "hondaAccord2019.png" },
   
    { make: "Hyundai", model: "Elantra", year: 2020, price: 20000, type: "Sedan", color: "Silver", country: "South Korea", transmission: "Automatic", horsepower: 147, acceleration: 8.6, engineType: "Inline-4", image: "hyundaiElantra2020.png" },
    { make: "Subaru", model: "Impreza", year: 2017, price: 16000, type: "Hatchback", color: "Red", country: "Japan", transmission: "Manual", horsepower: 152, acceleration: 8.9, engineType: "Flat-4", image: "subaruImpreza2017.png" },
    { make: "Mazda", model: "Mazda6", year: 2018, price: 21000, type: "Sedan", color: "Black", country: "Japan", transmission: "Automatic", horsepower: 187, acceleration: 7.6, engineType: "Inline-4", image: "mazdaMazda62018.png" },
    { make: "Volkswagen", model: "Passat", year: 2019, price: 23000, type: "Sedan", color: "White", country: "Germany", transmission: "Automatic", horsepower: 174, acceleration: 8.4, engineType: "Inline-4", image: "volkswagenPassat2019.png" },
    { make: "Nissan", model: "Sentra", year: 2016, price: 14000, type: "Sedan", color: "Black", country: "Japan", transmission: "Automatic", horsepower: 130, acceleration: 9.5, engineType: "Inline-4", image: "nissanSentra2016.png" },
    { make: "Kia", model: "Optima", year: 2020, price: 21000, type: "Sedan", color: "Blue", country: "South Korea", transmission: "Automatic", horsepower: 185, acceleration: 8.0, engineType: "Inline-4", image: "kiaOptima2020.png" },
    { make: "Lykan", model: "HyperSport", year: 2014, price: 3400000, type: "Coupe", color: "Red", country: "UAE", transmission: "Automatic", horsepower: 780, acceleration: 2.8, engineType: "Flat-6 Twin-Turbo", image: "lykanHyperSport.png" },
    { make: "Fenyr", model: "SuperSport", year: 2017, price: 1600000, type: "Coupe", color: "White", country: "UAE", transmission: "Automatic", horsepower: 900, acceleration: 2.7, engineType: "Flat-6 Twin-Turbo", image: "fenyrSuperSport.png" },
    { make: "Devel", model: "Sixteen", year: 2024, price: 2000000, type: "Hypercar", color: "Black", country: "UAE", transmission: "Automatic", horsepower: 5007, acceleration: 1.8, engineType: "V16 Quad-Turbo", image: "develSixteen.png" },
    { make: "Zarooq", model: "Sand Racer", year: 2020, price: 450000, type: "SUV", color: "Red", country: "UAE", transmission: "Automatic", horsepower: 525, acceleration: 3.9, engineType: "V8", image: "zarooqSandRacer.png" },
   
    { make: "Barq", model: "Rena Max", year: 2023, price: 55000, type: "Electric Scooter", color: "Black", country: "Saudi Arabia", transmission: "Automatic", horsepower: 20, acceleration: 4.0, engineType: "Electric", image: "barqRenaMax.png" },
    { make: "Ceer", model: "EV Series", year: 2024, price: 40000, type: "Sedan", color: "Red", country: "Saudi Arabia", transmission: "Automatic", horsepower: 300, acceleration: 4.5, engineType: "Electric", image: "ceerEVSeries.png" },
    { make: "Sham", model: "Car", year: 2008, price: 12000, type: "Sedan", color: "Grey", country: "Syria", transmission: "Manual", horsepower: 94, acceleration: 13.0, engineType: "Inline-4", image: "shamCar.png" },
    { make: "TOGG", model: "T10X", year: 2023, price: 50000, type: "SUV", color: "Blue", country: "Turkey", transmission: "Automatic", horsepower: 320, acceleration: 4.7, engineType: "Electric", image: "toggT10X.png" },
    { make: "Anadol", model: "A1", year: 1971, price: 7000, type: "Sedan", color: "Red", country: "Turkey", transmission: "Manual", horsepower: 55, acceleration: 18.0, engineType: "Inline-4", image: "anadolA1.png" },
    { make: "EV Electra", model: "Quds Rise", year: 2022, price: 30000, type: "Electric Sedan", color: "Blue", country: "Lebanon", transmission: "Automatic", horsepower: 200, acceleration: 6.0, engineType: "Electric", image: "evElectraQudsRise.png" },
    { make: "Nasr Automotive", model: "E70", year: 2021, price: 25000, type: "Electric Sedan", color: "White", country: "Egypt", transmission: "Automatic", horsepower: 150, acceleration: 8.0, engineType: "Electric", image: "nasrE70.png" },
    { make: "Neo Motors", model: "N1", year: 2023, price: 20000, type: "Sedan", color: "Brown", country: "Morocco", transmission: "Automatic", horsepower: 130, acceleration: 9.0, engineType: "Inline-4", image: "neoMotorsN1.png" },
    { make: "Emin Auto", model: "Model X", year: 2024, price: 22000, type: "SUV", color: "Blue", country: "Algeria", transmission: "Automatic", horsepower: 140, acceleration: 8.5, engineType: "Inline-4", image: "eminAutoModelX.png" },
   
    { make: "Renault", model: "Algeria Edition", year: 2023, price: 18000, type: "Sedan", color: "White", country: "Algeria", transmission: "Manual", horsepower: 115, acceleration: 10.0, engineType: "Inline-4", image: "renaultAlgeriaEdition.png" },
    { make: "Pak Suzuki", model: "Alto", year: 2021, price: 10000, type: "Hatchback", color: "Red", country: "Pakistan", transmission: "Automatic", horsepower: 48, acceleration: 16.0, engineType: "Inline-3", image: "pakSuzukiAlto.png" },
    { make: "Proton", model: "Saga", year: 2020, price: 9000, type: "Sedan", color: "Red", country: "Malaysia", transmission: "Manual", horsepower: 94, acceleration: 12.5, engineType: "Inline-4", image: "protonSaga.png" },
    { make: "Esemka", model: "Bima EV", year: 2022, price: 25000, type: "Electric Pickup", color: "White", country: "Indonesia", transmission: "Automatic", horsepower: 180, acceleration: 7.0, engineType: "Electric", image: "esemkaBimaEV.png" },
    { make: "Wuling", model: "Air EV", year: 2022, price: 20000, type: "Electric Minicar", color: "Yellow", country: "Indonesia", transmission: "Automatic", horsepower: 40, acceleration: 10.0, engineType: "Electric", image: "wulingAirEV.png" },
    { make: "BYD", model: "Han EV", year: 2022, price: 45000, type: "Sedan", color: "Blue", country: "China", transmission: "Automatic", horsepower: 500, acceleration: 3.9, engineType: "Electric", image: "bydHanEV.png" },
    { make: "NIO", model: "ES8", year: 2023, price: 70000, type: "SUV", color: "White", country: "China", transmission: "Automatic", horsepower: 543, acceleration: 4.4, engineType: "Electric", image: "nioES8.png" },
    { make: "Xpeng", model: "P7", year: 2023, price: 40000, type: "Sedan", color: "Silver", country: "China", transmission: "Automatic", horsepower: 430, acceleration: 4.3, engineType: "Electric", image: "xpengP7.png" },
    { make: "Geely", model: "Geometry A", year: 2022, price: 35000, type: "Sedan", color: "Green", country: "China", transmission: "Automatic", horsepower: 190, acceleration: 8.8, engineType: "Electric", image: "geelyGeometryA.png" },
    { make: "Great Wall Motors", model: "Ora Good Cat", year: 2022, price: 30000, type: "Hatchback", color: "Red", country: "China", transmission: "Automatic", horsepower: 171, acceleration: 7.5, engineType: "Electric", image: "greatWallOraGoodCat.png" },

    { make: "Honda", model: "Accord", year: 2022, price: 27000, type: "Sedan", color: "Red", country: "Japan", transmission: "CVT", horsepower: 192, acceleration: 7.6, engineType: "Turbocharged Inline-4", image: "hondaAccord2022.png" },
    { make: "Subaru", model: "Outback", year: 2023, price: 32000, type: "Wagon", color: "White", country: "Japan", transmission: "CVT", horsepower: 182, acceleration: 8.7, engineType: "Flat-4", image: "subaruOutback2023.png" },
    { make: "Toyota", model: "Corolla Cross", year: 2023, price: 24000, type: "SUV", color: "Yellow", country: "Japan", transmission: "CVT", horsepower: 169, acceleration: 8.0, engineType: "Inline-4", image: "toyotaCorollaCross2023.png" },
    { make: "Ferrari", model: "Roma", year: 2023, price: 250000, type: "Coupe", color: "Red", country: "Italy", transmission: "Automatic", horsepower: 612, acceleration: 3.4, engineType: "Twin-Turbo V8", image: "ferrariRoma2023.png" },
    { make: "Lamborghini", model: "Urus", year: 2022, price: 225000, type: "SUV", color: "Yellow", country: "Italy", transmission: "Automatic", horsepower: 641, acceleration: 3.6, engineType: "Twin-Turbo V8", image: "lamborghiniUrus2022.png" },
    { make: "Maserati", model: "Ghibli Trofeo", year: 2023, price: 115000, type: "Sedan", color: "Blue", country: "Italy", transmission: "Automatic", horsepower: 580, acceleration: 4.0, engineType: "Twin-Turbo V8", image: "maseratiGhibliTrofeo2023.png" },
    { make: "Pagani", model: "Huayra", year: 2021, price: 3200000, type: "Coupe", color: "Red", country: "Italy", transmission: "Automatic", horsepower: 730, acceleration: 3.3, engineType: "Twin-Turbo V12", image: "paganiHuayra2021.png" },
    { make: "Alfa Romeo", model: "Giulia Quadrifoglio", year: 2022, price: 80000, type: "Sedan", color: "Green", country: "Italy", transmission: "Automatic", horsepower: 505, acceleration: 3.8, engineType: "Twin-Turbo V6", image: "alfaRomeoGiulia2022.png" },
    { make: "Fiat", model: "500 Abarth", year: 2023, price: 24000, type: "Hatchback", color: "Yellow", country: "Italy", transmission: "Manual", horsepower: 180, acceleration: 6.7, engineType: "Turbocharged Inline-4", image: "fiat500Abarth2023.png" },
    { make: "Toyota", model: "RAV4", year: 2022, price: 27000, type: "SUV", color: "Silver", country: "Japan", transmission: "Automatic", horsepower: 203, acceleration: 8.2, engineType: "Inline-4", image: "toyotaRAV42022.png" },
    
    { make: "Toyota", model: "Supra", year: 2023, price: 43000, type: "Coupe", color: "Red", country: "Japan", transmission: "Automatic", horsepower: 382, acceleration: 3.9, engineType: "Inline-6", image: "toyotaSupra2023.png" },
    { make: "Toyota", model: "Highlander", year: 2021, price: 35000, type: "SUV", color: "White", country: "Japan", transmission: "Automatic", horsepower: 295, acceleration: 7.2, engineType: "V6", image: "toyotaHighlander2021.png" },
    { make: "Toyota", model: "Tacoma", year: 2020, price: 33000, type: "Truck", color: "White", country: "Japan", transmission: "Manual", horsepower: 278, acceleration: 7.7, engineType: "V6", image: "toyotaTacoma2020.png" },
    { make: "Toyota", model: "Prius", year: 2022, price: 25000, type: "Hatchback", color: "Silver", country: "Japan", transmission: "CVT", horsepower: 121, acceleration: 10.5, engineType: "Hybrid Inline-4", image: "toyotaPrius2022.png" },
    { make: "Toyota", model: "Avalon", year: 2021, price: 36000, type: "Sedan", color: "Black", country: "Japan", transmission: "Automatic", horsepower: 301, acceleration: 6.0, engineType: "V6", image: "toyotaAvalon2021.png" },
    { make: "Toyota", model: "4Runner", year: 2023, price: 38000, type: "SUV", color: "Orange", country: "Japan", transmission: "Automatic", horsepower: 270, acceleration: 7.7, engineType: "V6", image: "toyota4Runner2023.png" },
    { make: "Toyota", model: "Land Cruiser", year: 2023, price: 85000, type: "SUV", color: "White", country: "Japan", transmission: "Automatic", horsepower: 409, acceleration: 6.7, engineType: "Twin-Turbo V6", image: "toyotaLandCruiser2023.png" },
    { make: "Toyota", model: "RAV4", year: 2020, price: 26000, type: "SUV", color: "Blue", country: "Japan", transmission: "Automatic", horsepower: 203, acceleration: 8.5, engineType: "Inline-4", image: "toyotaRAV42020.png" },
    { make: "Toyota", model: "Supra", year: 2020, price: 40000, type: "Coupe", color: "Orange", country: "Japan", transmission: "Automatic", horsepower: 335, acceleration: 4.1, engineType: "Inline-6", image: "toyotaSupra2020.png" },
    { make: "Toyota", model: "Highlander", year: 2019, price: 33000, type: "SUV", color: "Black", country: "Japan", transmission: "Automatic", horsepower: 295, acceleration: 7.8, engineType: "V6", image: "toyotaHighlander2019.png" },
    
    { make: "Toyota", model: "Tacoma", year: 2018, price: 30000, type: "Truck", color: "Silver", country: "Japan", transmission: "Manual", horsepower: 278, acceleration: 8.0, engineType: "V6", image: "toyotaTacoma2018.png" },
    { make: "Toyota", model: "Corolla", year: 2021, price: 20000, type: "Sedan", color: "Blue", country: "Japan", transmission: "CVT", horsepower: 139, acceleration: 8.2, engineType: "Inline-4", image: "toyotaCorolla2021.png" },
    { make: "Toyota", model: "Corolla Hybrid", year: 2022, price: 23000, type: "Sedan", color: "White", country: "Japan", transmission: "CVT", horsepower: 121, acceleration: 10.0, engineType: "Hybrid Inline-4", image: "toyotaCorollaHybrid2022.png" },
    { make: "Volkswagen", model: "Golf GTI", year: 2024, price: 30000, type: "Hatchback", color: "Red", country: "Germany", transmission: "Automatic", horsepower: 241, acceleration: 5.6, engineType: "Turbocharged Inline-4", image: "volkswagenGolfGTI2024.png" },
    { make: "Volkswagen", model: "Tiguan", year: 2023, price: 33000, type: "SUV", color: "Grey", country: "Germany", transmission: "Automatic", horsepower: 184, acceleration: 8.3, engineType: "Turbocharged Inline-4", image: "volkswagenTiguan2023.png" },
    { make: "Volkswagen", model: "Passat", year: 2021, price: 28000, type: "Sedan", color: "Silver", country: "Germany", transmission: "Automatic", horsepower: 174, acceleration: 8.1, engineType: "Turbocharged Inline-4", image: "volkswagenPassat2021.png" },
    { make: "Volkswagen", model: "ID.4", year: 2023, price: 40000, type: "SUV", color: "White", country: "Germany", transmission: "Automatic", horsepower: 201, acceleration: 7.6, engineType: "Electric", image: "volkswagenID42023.png" },
    { make: "Honda", model: "Accord", year: 2023, price: 27000, type: "Sedan", color: "Black", country: "Japan", transmission: "CVT", horsepower: 192, acceleration: 7.6, engineType: "Turbocharged Inline-4", image: "hondaAccord2023.png" },
    { make: "Honda", model: "CR-V", year: 2022, price: 32000, type: "SUV", color: "Silver", country: "Japan", transmission: "Automatic", horsepower: 190, acceleration: 8.2, engineType: "Turbocharged Inline-4", image: "hondaCRV2022.png" },
    { make: "Honda", model: "Fit", year: 2020, price: 18000, type: "Hatchback", color: "Blue", country: "Japan", transmission: "CVT", horsepower: 130, acceleration: 9.6, engineType: "Inline-4", image: "hondaFit2020.png" },

    { make: "Ford", model: "F-150", year: 2023, price: 40000, type: "Truck", color: "Blue", country: "USA", transmission: "Automatic", horsepower: 400, acceleration: 6.0, engineType: "V6", image: "fordF1502023.png" },
    { make: "Ford", model: "Explorer", year: 2022, price: 37000, type: "SUV", color: "Black", country: "USA", transmission: "Automatic", horsepower: 300, acceleration: 7.0, engineType: "Turbocharged Inline-4", image: "fordExplorer2022.png" },
    { make: "Ford", model: "Fiesta", year: 2019, price: 15000, type: "Hatchback", color: "Brown", country: "USA", transmission: "Manual", horsepower: 120, acceleration: 9.5, engineType: "Inline-4", image: "fordFiesta2019.png" },
    { make: "Ford", model: "Bronco", year: 2021, price: 32000, type: "SUV", color: "Green", country: "USA", transmission: "Automatic", horsepower: 270, acceleration: 7.7, engineType: "Turbocharged Inline-4", image: "fordBronco2021.png" },
    { make: "Hyundai", model: "Elantra", year: 2023, price: 22000, type: "Sedan", color: "Blue", country: "South Korea", transmission: "CVT", horsepower: 147, acceleration: 8.3, engineType: "Inline-4", image: "hyundaiElantra2023.png" },
    { make: "Hyundai", model: "Tucson", year: 2023, price: 30000, type: "SUV", color: "Brown", country: "South Korea", transmission: "Automatic", horsepower: 187, acceleration: 8.6, engineType: "Inline-4", image: "hyundaiTucson2023.png" },
    { make: "Hyundai", model: "Sonata", year: 2021, price: 27000, type: "Sedan", color: "Black", country: "South Korea", transmission: "Automatic", horsepower: 191, acceleration: 7.9, engineType: "Inline-4", image: "hyundaiSonata2021.png" },
    { make: "Hyundai", model: "Kona Electric", year: 2023, price: 36000, type: "SUV", color: "Grey", country: "South Korea", transmission: "Automatic", horsepower: 201, acceleration: 6.4, engineType: "Electric", image: "hyundaiKonaElectric2023.png" },
];







// pictures:


// Toyota Camry 2020:           https://s3.amazonaws.com/di-enrollment-api/toyota/models/2020/camry/colors/celestial_silver_metallic.jpg
// Honda Civic 2018:            https://images.hgmsites.net/lrg/2018-honda-civic-si-coupe-manual-angular-front-exterior-view_100659534_l.jpg
// Ford Mustang 2021:           https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/review/hero_image/2021-Ford-Match-1-Hatch-Orange-Press-1001x565-2.jpg
// Jeep Cherokee 2022:          https://www.jeep.ch/content/dam/jeep/crossmarket/model/grand-cherokee-my22/overview/colorizer/summit-reserve/figurines/jeep-grand-cherokee-4xe-summit-reserve-diamond-black-565x330.png
// BMW X5 2023:                 https://cdn.bmwblog.com/wp-content/uploads/2022/08/2023-bmw-x5-m-lci.jpeg
// Tesla Model 3 2022:          https://platform.cstatic-images.com/in/v2/stock_photos/5df003c8-1fb9-4e70-94c0-f80762ff7c82/77bdaca1-7b99-47a7-ba29-09cc2e7cf581.png
// Audi A4 2021:                https://www.motortrend.com/uploads/sites/10/2020/12/2021-audi-a4-premium-sedan-angular-front.png
// Chevrolet Corvette 2023:     https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-z07-101-1664802216.jpg?crop=0.546xw:0.462xh;0.184xw,0.286xh&resize=2048:*
// Kia Sportage 2022:           https://cdn.motor1.com/images/mgl/MBlPE/s1/2022-kia-sportage-front-quarter.jpg
// Hyundai Tucson 2022:         https://platform.cstatic-images.com/in/v2/stock_photos/3f3be551-ec11-4f0f-91f8-c6d738e8dee4/9a7bab43-2cdb-4be5-9c3d-a7babd98e935.png


// Mazda CX-5 2023:             https://di-sitebuilder-assets.s3.amazonaws.com/Mazda/model-pages/2022/CX-5/trim-2.5-S.png
// Volkswagen Golf GTI 2022:    https://www.cnet.com/a/img/resize/bd0f20e058657b2a2ba9cc1c54e1b58673486910/hub/2022/03/30/e072f29e-c57b-4101-a036-1921695e7721/2022-vw-golf-gti-long-term-001.jpg?auto=webp&fit=crop&height=675&width=1200
// Nissan Altima 2021:          https://di-sitebuilder-assets.s3.amazonaws.com/Nissan/MLP/Altima/2021/colors/Brilliant+Silver+Metallic.jpg
// Porsche 911 Carrera 2023     https://news.dupontregistry.com/wp-content/uploads/2023/07/porsche-911-carrera-gts29-scaled.jpg
// Mercedes-Benz GLE 2023:      https://cdn.wheel-size.com/thumbs/ee/68/ee684c19f2c358b649963142421aab01.jpg
// Subaru Outback 2021:         https://file.kelleybluebookimages.com/kbb/base/evox/CP/14595/2021-Subaru-Outback-front_14595_032_1838x842_SAM_cropped.png
// Toyota Corolla 2016:         https://ymimg1.b8cdn.com/resized/car_model/2111/pictures/2455604/mobile_listing_main_2014_Toyota_Corolla_Front.jpg
// Ford Fusion 2017:            https://cars.usnews.com/static/images/Auto/izmo/Colors/ford_17fusionsesa2fa_lightningblue.jpg
// Chevrolet Malibu 2018:       https://cdn.jdpower.com/Models/640x480/2018-Chevrolet-Malibu-Hybrid.jpg
// Honda Accord 2019:           https://platform.cstatic-images.com/in/v2/stock_photos/36f04758-5aab-42bc-912c-8e3420db060d/d5c9cc6a-43e6-4128-9154-17ff7f67955b.png


// Hyundai Elantra 2020:        https://media.motorfuse.com/img.cfm/type/3/img/0F16CD4A4D00D7D5C3E6AFC0C42B0B10F5CB41
// Subaru Impreza 2017:         https://lh3.googleusercontent.com/proxy/ziZA1Uv7T97SzcIhK7_vYJwLTOoDkB43O57dPCuwev3zq-odewKDKpGd5r3SqiDg2EuzeKUw_m1UKKHccufeERl7yE38J6lJUMkdL0AE9-FbbbF-PNoNVOuorIsVm7NQ2qIkGU3QO2ROKrBWmpg
// Mazda Mazda6 2018:           https://www.motortrend.com/uploads/sites/10/2018/06/2018-mazda-mazda6-sport-sedan-angular-front.png
// Volkswagen Passat 2019:      https://file.kelleybluebookimages.com/kbb/base/evox/CP/13242/2019-Volkswagen-Passat-front_13242_032_2400x1800_0Q0Q.png
// Nissan Sentra 2016:          https://www.motortrend.com/uploads/sites/10/2016/05/2016-nissan-sentra-s-cvt-sedan-angular-front.png
// Kia Optima 2020:             https://di-uploads-pod26.dealerinspire.com/southlakekia/uploads/2019/12/2020Kia-Optima-LX-Jellybean.jpg
// Lykan HyperSport 2014:       https://i.redd.it/3zpoahysj6m51.jpg
// Fenyr SuperSport 2017:       https://upload.wikimedia.org/wikipedia/commons/1/1b/2018_W_Motors_Fenyr_SuperSport_3.8_%281%29.jpg
// Devel Sixteen 2024:          https://upload.wikimedia.org/wikipedia/commons/5/56/Devel_Sixteen_V-8_Prototype_%28cropped%29.jpg
// Zarooq Sand Racer 2020:      https://www.blessthisstuff.com/imagens/stuff/zarooq-sand-racer-2.jpg


// Barq Rena Max 2023:          https://www.moveelectric.com/sites/default/files/styles/article/public/2022-03/BARQ%20LEAD%20HERO.jpg?itok=6ryGixSU
// Ceer EV Series 2024:         https://hips.hearstapps.com/hmg-prod/images/foxtron-1667830222.jpg?crop=0.504xw:1.00xh;0.196xw,0&resize=1200:*
// Sham Car 2008:               https://api.keyfinder.net/Uploads/Attachments/8abad08b-7b21-48c6-95d3-af31a2cce14f_638587314874480387.jpg
// TOGG T10X 2023:              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5y94bR21lUvIuNRNpPgL6uUz6TZDQ77Siw&s
// Anadol A1 1971:              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0Ys8dtEyGbrlOgkgc_GrgH1X6XFwSebTrw&s
// EV Electra Quds Rise 2022:   https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/202105/ev-electra-rise---a--8-2.jpg
// Nasr Automotive E70 2021:    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9utMeb9B-gi5XgWi0LxJazqSEe2IOIYqz0g&s
// Neo Motors N1 2023:          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRdh7ju83f1HVGWzgd8J-Y4smpil_A1fMJA&s
// Emin Auto Model X 2024:      https://carbike360-ae.s3.me-central-1.amazonaws.com/tesla_model_x_2024_left_side_front_view_5ecff00fd8.jpg
// Renault Algeria Edition 2023:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnr3xewqduyekIGRV6C1Z5OFT9cMQv6YR9szNhVg2EzhFE4FEg42fRZipiLtp0xJpG5PI&usqp=CAU


// Pak Suzuki Alto 2021:        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2SEFgSwovlw2IenrbnVlVGVkC2-5X5TjPQ&s
// Proton Saga 2020:            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPT7bgn4Ob_Blf8bGbc6dT_0L-e3E5O5jLHQ&s
// Esemka Bima EV 2022:         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_3RUv96YQUmHnnS075ROo3kNMYlQg6Misw&s
// Wuling Air EV 2022:          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepqhD8fmEmtoiChvu337pbY1PU22GOZuJTg&s
// BYD Han EV 2022:             https://cdn.wheel-size.com/automobile/body/byd-han-2022-2023-1663227015.7443802.jpg
// NIO ES8 2023:                https://i0.wp.com/chinesevehicles.net/wp-content/uploads/2022/12/%D8%AA%D8%BA%D8%A8%D8%BA%D8%A8%D8%BA%D8%A8.webp?fit=1536%2C952&ssl=1
// Xpeng E7 2023:               https://www.motortrend.com/uploads/2022/07/XPeng-P7-front-three-quarter-1.jpg
// Geely Geometry A 2022:       https://cdn.wheel-size.com/automobile/body/geely-geometry-e-2022-2024-1702023618.8343275.jpg
// Great Wall Motors Ora Good Cat 2022: https://www.topgear.com/sites/default/files/2022/11/1-Ora-Funky-Cat-review.jpg


// Honda Accord 2022:           https://platform.cstatic-images.com/large/in/v2/stock_photos/82ade758-2efe-4764-90bc-45229fdb28a9/c9896353-f768-4b07-8bd3-3aaf4d1c4d3f.png
// Subaru Outback 2023:         https://file.kelleybluebookimages.com/kbb/base/evox/CP/51251/2023-Subaru-Outback-front_51251_032_1861x838_K1X_cropped.png
// Toyota Corolla Cross 2023:   https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/05/11/608680/431005/toyota_corolla_cross_hybrid_2023_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4441534.jpg
// Ferrari Roma 2023:           https://www.topgear.com/sites/default/files/2023/09/1%20Ferrari%20Roma%20Spider.jpg
// Lamborghini Urus 2022:       https://ymimg1.b8cdn.com/resized/car_model/7884/pictures/7416338/mobile_listing_main_2018_Lamborghini_Urus__1_.jpg
// Maserati Ghibli Trofeo 2023: https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2021/09/2021-Maserati-Ghibli-Trofeo-Chris-Balcerak-1.jpg
// Pagani Huayra 2021:          https://spots.ag/2021/07/17/pagani-huayra-roadster-c202917072021202349_1.jpg?
// Alfa Romeo Giulia Quadrifoglio 2022: https://file.kelleybluebookimages.com/kbb/base/house/2022/2022-Alfa%20Romeo-Giulia-FrontSide_ALGIU2201_640x480.jpg
// Fiat 500 Abarth 2023:        https://www.motortrend.com/uploads/2022/11/New-Fiat-500e-Abarth-EV-hatchback-23.jpg
// Toyota RAV4 2022:            https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/jynhempukIxZFuy1XaL8HEGDLb7ly0tkLw4SDSHj.png

// Toyota Supra 2023:           https://www.earnhardttoyota.com/assets/stock/ColorMatched_01/Transparent/640/cc_2022TOC13_01_640/cc_2022TOC130004_01_640_D05.png
// Toyota Highlander 2021:      https://images.hgmsites.net/lrg/2021-toyota-highlander-le-fwd-natl-angular-front-exterior-view_100767712_l.jpg
// Toyota Tacoma 2020:          https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-tacoma-trd-off-road-crew-cab-4wd-pick-up-angular-front.png
// Toyota Prius 2022:           https://platform.cstatic-images.com/large/in/v2/stock_photos/9e23a53d-bd29-4b99-9dbd-778debe2fe60/7c14ae76-09fe-4047-9a7c-bdcd40d0aa63.png
// Toyota Avalon 2021:          https://images.hgmsites.net/med/2021-toyota-avalon-trd-fwd-natl-angular-front-exterior-view_100790206_m.jpg
// Toyota 4Runner 2023:         https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/4Runner/2023/hero_image_4Runner.png
// Toyota Land Cruiser 2023:    https://images.topgear.com.ph/topgear/images/2021/09/17/toyota-landcruiser-2021-main-1631876903.jpg
// Toyota RAV4 2020:            https://www.seegertoyota.com/static/dealer-12152/2020_Rav4_US_XLE-FWD_08W9_002.png
// Toyota Supra 2020:           https://images-cdn.ubuy.co.in/653cc8744047b71cd07f49bd-han-s-2020-toyota-supra-orange-jada.jpg
// Toyota Highlander 2019:      https://platform.cstatic-images.com/in/v2/stock_photos/68a778fa-0728-4489-ad03-e0c0d4da8ac5/6a0b5b56-b90f-4e04-b299-78604add1916.png

// Toyota Tacoma 2018:          https://www.motortrend.com/uploads/sites/10/2017/12/2018-toyota-tacoma-trd-off-road-double-pickup-angular-front.png?w=768&width=768&q=75&format=webp
// Toyota Corolla 2021:         https://di-enrollment-api.s3.amazonaws.com/toyota/models/2021/corolla/colors/BLUEPRINT.jpg
// Toyota Corolla Hybrid 2022:  https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/Corolla_Hybrid/2022/hero_image_corollahybrid.png
// Volkswagen Golf GTI 2024:    https://auto-illustrierte.ch/assets/cache/1920/960/media/Artikel/240124%20VW%20Golf%208%20Facelift/VW_Golf_8_GTI_Facelift_2024_Front.jpg
// Volkswagen Tiguan 2023:      https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2023-volkswagen-tiguan-color-platinum-gray-metallic.png
// Volkswagen Passat 2021:      https://images.hgmsites.net/lrg/2021-volkswagen-passat-2-0t-se-auto-angular-front-exterior-view_100775694_l.jpg
// Volkswagen ID.4 2024:        https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/fa61b1cf-a24d-45c7-b49b-62f0256704fe/83b5cc30-dc9e-4a07-baf3-531188a073e8.png
// Honda Accord 2023:           https://images.hgmsites.net/lrg/2023-honda-accord-ex-cvt-angular-front-exterior-view_100882615_l.jpg
// Honda CR-V 2022:             https://ymimg1.b8cdn.com/resized/car_version/24287/pictures/8506310/listing_main_14317_st1280_046.jpg
// Honda Fit 2020:              https://hips.hearstapps.com/hmg-prod/images/new-honda-fit-101-1571792277.jpg

// Ford F-150 2023:             https://img3.d2cmedia.ca/mb674f5c753622d/3847/9955072/1/Ford-F_150-2023.jpg
// Ford Explorer 2022:          https://platform.cstatic-images.com/in/v2/stock_photos/ca440793-7ca2-468b-b3b2-50e27c628eca/8f7adfd5-c009-4a60-822a-0e0bcce06d9b.png
// Ford Fiesta 2019:            https://assets-clean.local-car-finder.com/images/13069/13069_st1280_089.png
// Ford Bronco 2021:            https://cars.usnews.com/static/images/Auto/izmo/i159614633/2021_ford_bronco_angularfront.jpg
// Hyundai Elantra 2023:        https://di-uploads-pod27.dealerinspire.com/allenturnerhyundai/uploads/2023/03/Screen-Shot-2023-03-03-at-5.14.31-PM.png
// Hyundai Tucson 2023:         https://assets-clean.local-car-finder.com/images/15048/15048_st1280_089.png
// Hyundai Sonata 2021:         https://images.hgmsites.net/lrg/2021-hyundai-sonata-limited-1-6t-angular-front-exterior-view_100797189_l.jpg
// Hyundai Kona Electric 2023:  https://img.sm360.ca/ir/w450h337c/images/newcar/ca/2023/hyundai/kona-electrique/preferred-/suv/2023_hyundai_kona-electrique_preffered_002.jpg





document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("car-search-form");
    const carList = document.querySelector(".car-list");

    displayCars(carListings);

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const make = document.getElementById("car-make").value.toLowerCase();
        const model = document.getElementById("car-model").value.toLowerCase();
        const year = document.getElementById("car-year").value;
        const type = document.getElementById("car-type").value.toLowerCase();
        const priceMin = parseInt(document.getElementById("car-price-min").value) || 0;
        const priceMax = parseInt(document.getElementById("car-price-max").value) || Infinity;
        const color = document.getElementById("car-color").value.toLowerCase();
        const country = document.getElementById("car-country").value.toLowerCase();
        const transmission = document.getElementById("car-transmission").value.toLowerCase();
        const horsepower = parseInt(document.getElementById("car-horsepower").value) || 0;
        const acceleration = parseFloat(document.getElementById("car-acceleration").value) || Infinity;
        const engine = document.getElementById("car-engine").value.toLowerCase();


        const filteredCars = carListings.filter(car => {
            const isMakeMatch = make === "" || car.make.toLowerCase().includes(make);
            const isModelMatch = model === "" || car.model.toLowerCase().includes(model);
            const isYearMatch = year === "" || car.year.toString() === year;
            const isTypeMatch = type === "" || car.type.toLowerCase() === type;
            const isPriceMatch = car.price >= priceMin && car.price <= priceMax;
            const isColorMatch = color === "" || car.color?.toLowerCase() === color;
            const isCountryMatch = country === "" || car.country?.toLowerCase() === country;
            const isTransmissionMatch = transmission === "" || car.transmission?.toLowerCase() === transmission;
            const isHorsepowerMatch = horsepower === 0 || car.horsepower >= horsepower;
            const isAccelerationMatch = acceleration === Infinity || car.acceleration <= acceleration;
            const isEngineMatch = engine === "" || car.engineType?.toLowerCase() === engine;


            return isMakeMatch && isModelMatch && isYearMatch && isTypeMatch && isPriceMatch &&
                   isColorMatch && isCountryMatch && isTransmissionMatch &&
                   isHorsepowerMatch && isAccelerationMatch && isEngineMatch;
        });


        displayCars(filteredCars);
    });


    function displayCars(cars) {
        carList.innerHTML = "";
        if (cars.length === 0) {
            carList.innerHTML = "<p>No cars found based on your search criteria.</p>";
        } else {
            cars.forEach(car => {
                const carItem = document.createElement("div");
                carItem.classList.add("car-item");
                carItem.innerHTML = `
                    <img src="${car.image}" alt="${car.make} ${car.model}">
                    <h3>${car.make} ${car.model} (${car.year})</h3>
                    <p>Price: $${car.price}</p>
                    <p>Type: ${car.type}</p>
                    <p>Color: ${car.color}</p>
                    <p>Country: ${car.country}</p>
                    <p>Transmission: ${car.transmission}</p>
                    <p>Horsepower: ${car.horsepower} hp</p>
                    <p>Acceleration: ${car.acceleration} seconds (0-60 mph)</p>
                    <p>Engine Type: ${car.engineType}</p>
                `;
                carList.appendChild(carItem);
            });
        }
    }
});







