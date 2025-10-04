const app = Vue.createApp({
 
    data() {
      return {
        selectedShape: null,
        choose: '',

        
      }
    },

  });
  
  // ---------Component-------------
  //================Circle=================\\
  //=======================================\\  
  app.component('circle-com', {
    data() {
      return {
        area: 0,
        circumference: 0,
        diameter: 0,
        radius: 0,
        result: 0,
        choose: '',
      };
    },
    methods: {
      calculateArea() {
        const r = this.diameter / 2;
        this.area = Math.PI * r * r;
        this.result = this.area;
      },
      
      calculateCircumference() {
        this.circumference = Math.PI * this.diameter;
        this.result = this.circumference;
      },
      
     
      calculateDiameter() {
        const r = Math.sqrt(this.area / Math.PI);
        this.diameter = 2 * r;
        this.result = this.diameter;
      },
      resetInputs() {
        this.area = 0;
        this.circumference = 0;
        this.diameter = 0;
        this.result = 0;
      }
    },
    
    watch: {
        // i will reset values here
        choose() {
            this.resetInputs();
          },
      diameter() {
        if (this.choose === 'area') {
          this.calculateArea();
        } else if (this.choose === 'Circu') {
          this.calculateCircumference();
        }
      },
      area() {
        if (this.choose === 'diameter') {
          this.calculateDiameter();
        }
      }
    },
    
    template: /*html*/
    `
    <div class="container">
      <div class="row m-3">
        <!-- Left Section with image and formulas -->
        <div class="col-md-4 mt-2">
          <img src="pic/circle2.png" width="200px">
          <p v-if="choose === 'area'">A = π(D/2)²</p>
          <p v-if="choose === 'Circu'">C = πD</p>
          <p v-if="choose === 'diameter'">D= <i class="fa-solid fa-square-root-variable"></i> 4A/π</p>
        </div>
  
        <!-- Input Section -->
        <div class="col-md-6 p-3 border">
        <h3 class="text-secondary">Calculation Area</h3>
          <!-- Input for Diameter when the user selects Circumference -->
          <label for="radius" class="mt-3" v-if="choose === 'Circu'">Enter Diameter (d): </label>
          <input type="number" id="radius" class="form-control" v-if="choose === 'Circu'" v-model="diameter" />
  
          <!-- Input for Diameter when the user selects 'area' -->
          <label for="diameter" class="mt-3" v-if="choose === 'area'">Enter Diameter (d): </label>
          <input type="number" id="diameter" class="form-control" v-if="choose === 'area'" v-model="diameter" />
          
          <!-- Input for Area when the user selects 'diameter' -->
          <label for="diameter" class="mt-3" v-if="choose === 'diameter'">Enter Area (a): </label>
          <input type="number" id="diameter" class="form-control" v-if="choose === 'diameter'" v-model="area" />
          
          <!-- Display the result -->
          <h5 v-if="diameter > 0 | area > 0" class="mt-2">Result = {{ result }}</h5>
        </div>
  
        <!-- Radio Buttons to Select Calculation Type -->
        <div class="col-md-2 border p-3 text-start">
          <form class="row">
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="area" /> <span>Area</span>
            </div>
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="Circu" /> <span>Circumference</span>
            </div>
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="diameter" /> <span>Diameter</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    `
  });

  //================Squar=================\\
  //=======================================\\  
  app.component('square-com', {
    data() {
      return {
        area: 0,
        circumference: 0,
        side: 0,
        radius: 0,
        result: 0,
        choose: '',
      };
    },
    methods: {
      calculateArea() {
        this.area = this.side * 2;
        this.result = this.area;
      },
      
      calculateCircumference() {
        this.circumference = this.side * 4;
        this.result = this.circumference;
      },
      

      resetInputs() {
        this.area = 0;
        this.circumference = 0;
        this.side = 0;
        this.result = 0;
      }
    },
    
    watch: {
        choose() {
            this.resetInputs();
          },
      side() {
        if (this.choose === 'area') {
          this.calculateArea();
        } else if (this.choose === 'Circu') {
          this.calculateCircumference();
        }
      },
    },
    
    template: /*html*/
    `
    <div class="container">
      <div class="row m-3 ">
        <!-- Left Section with image and formulas -->
        <div class="col-md-4 mt-2">
          <img src="pic/square2.png" width="250px">
          <p v-if="choose === 'area'">A = (side)² </p>
          <p v-if="choose === 'Circu'">C = side × 4 </p>
        </div>
  
        <!-- Input Section -->
        <div class="col-md-6 p-3 border">
        <h3 class="text-secondary">Calculation Area</h3>
          <label for="radius" class="mt-3" v-if="choose === 'Circu'">Enter Side Value: </label>
          <input type="number" id="radius" class="form-control" v-if="choose === 'Circu'" v-model="side" />
  
          <label for="diameter" class="mt-3" v-if="choose === 'area'">Enter Side Value: </label>
          <input type="number" id="diameter" class="form-control" v-if="choose === 'area'" v-model="side" />
          
          
          <!-- Display the result -->
          <h5 v-if="side > 0" class="mt-2">Result = {{ result }}</h5>
        </div>
  
        <!-- Radio Buttons to Select Calculation Type -->
        <div class="col-md-2 border p-3 text-start">
          <form class="row">
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="area" /> <span>Area</span>
            </div>
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="Circu" /> <span>Circumference</span>
            </div>

          </form>
        </div>
      </div>
    </div>
    `
  });


  //================Triangle=================\\
  //=======================================\\  
  app.component('triangle-com', {
    data() {
      return {
        area: 0,
        circumference: 0,
        base: 0,
        height: 0,
        a: 0,
        b: 0,
        c: 0,
        result: 0,
        choose: '',
      };
    },
    methods: {
      calculateArea() {
        if (this.base > 0 && this.height > 0) {
          this.area = (this.base * this.height) / 2;
          this.result = this.area;
        } else {
          this.result = 0;
        }
      },
  
      calculateCircumference() {
        if (this.a > 0 && this.b > 0 && this.c > 0) {
          this.circumference = this.a + this.b + this.c;
          this.result = this.circumference;
        } else {
          this.result = 0;
        }
      },
  
      resetInputs() {
        this.area = 0;
        this.circumference = 0;
        this.base = 0;
        this.height = 0;
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.result = 0;
      }
    },
  
    watch: {
      choose() {
        this.resetInputs();
      }
    },
  
    template: /*html*/
    `
      <div class="container">
        <div class="row m-3">
          <!-- Left Section with image and formulas -->
          <div class="col-md-4 mt-2">
            <img src="pic/triangle2.png" width="250px">
            <p v-if="choose === 'area'">A = 1/2 × base × height</p>
            <p v-if="choose === 'Circu'">C = a + b + c</p>
          </div>
  
          <!-- Input Section -->
          <div class="col-md-6 p-3 border">
            <h3 class="text-secondary">Calculation Area</h3>
            <label for="base" class="mt-3" v-if="choose === 'area'">Enter Base : </label>
            <input type="number" id="base" class="form-control" v-if="choose === 'area'" v-model="base" @input="calculateArea" />
            
            <label for="height" class="mt-3" v-if="choose === 'area'">Enter Height: </label>
            <input type="number" id="height" class="form-control" v-if="choose === 'area'" v-model="height" @input="calculateArea" />
  
            <label for="a" class="mt-3" v-if="choose === 'Circu'">Enter A: </label>
            <input type="number" id="a" class="form-control" v-if="choose === 'Circu'" v-model="a" @input="calculateCircumference" />
  
            <label for="b" class="mt-3" v-if="choose === 'Circu'">Enter B: </label>
            <input type="number" id="b" class="form-control" v-if="choose === 'Circu'" v-model="b" @input="calculateCircumference" />
            
            <label for="c" class="mt-3" v-if="choose === 'Circu'">Enter C: </label>
            <input type="number" id="c" class="form-control" v-if="choose === 'Circu'" v-model="c" @input="calculateCircumference" />
  
            <!-- Display the result -->
            <h5 v-if="result > 0" class="mt-2">Result = {{ result }}</h5>
          </div>
  
          <!-- Radio Buttons to Select Calculation Type -->
          <div class="col-md-2 border p-3 text-start">
            <form class="row">
              <div class="col-12">
                <input type="radio" name="cir" v-model="choose" value="area" /> <span>Area</span>
              </div>
              <div class="col-12">
                <input type="radio" name="cir" v-model="choose" value="Circu" /> <span>Circumference</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    `
  });
  


  //================rectangle=================\\
  //=======================================\\  
  app.component('rectangle-com', {
    data() {
      return {
        area: 0,
        circumference: 0,
        length: 0,
        width: 0,
        result: 0,
        choose: '',
      };
    },
    methods: {
        calculateArea() {
          if (this.length > 0 && this.width > 0) {
            this.area = (this.length * this.width) ;
            this.result = this.area;
          } else {
            this.result = 0;
          }
        },
    
        calculateCircumference() {
          if (this.length > 0 && this.width > 0) {
            this.circumference = (this.length + this.width) * 2;
            this.result = this.circumference;
          } else {
            this.result = 0;
          }
        },
    
        resetInputs() {
          this.area = 0;
          this.circumference = 0;
          this.length = 0;
          this.width = 0;
          this.result = 0;
        }
      },
    
      watch: {
        choose() {
          this.resetInputs();
        }
      },
    
    template: /*html*/
    `
    <div class="container">
      <div class="row m-3">
        <!-- Left Section with image and formulas -->
        <div class="col-md-4 mt-2">
          <img src="pic/rectangle2.png" width="300px">
          <p v-if="choose === 'area'">A = l×w</p>
          <p v-if="choose === 'Circu'">C = 2×(l+w)</p>
        </div>
  
        <!-- Input Section -->
        <div class="col-md-6 p-3 border">
        <h3 class="text-secondary">Calculation Area</h3>
          <label for="radius" class="mt-3" v-if="choose === 'Circu'">Enter Length: </label>
          <input type="number" class="form-control" v-if="choose === 'Circu'" v-model="length"  @input="calculateCircumference"/>
          <label for="radius" class="mt-3" v-if="choose === 'Circu'">Enter Width: </label>
          <input type="number"  class="form-control" v-if="choose === 'Circu'" v-model="width" @input="calculateCircumference" />
  
          <label for="diameter" class="mt-3" v-if="choose === 'area'">Enter Length: </label>
          <input type="number"  class="form-control" v-if="choose === 'area'" v-model="length" @input="calculateArea" />
          <label for="diameter" class="mt-3" v-if="choose === 'area'">Enter Width: </label>
          <input type="number" class="form-control" v-if="choose === 'area'" v-model="width" @input="calculateArea"/>
          
          
          <!-- Display the result -->
          <h5 v-if="result > 0" class="mt-2">Result = {{ result }}</h5>
        </div>
  
        <!-- Radio Buttons to Select Calculation Type -->
        <div class="col-md-2 border p-3 text-start">
          <form class="row">
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="area" /> <span>Area</span>
            </div>
            <div class="col-12">
              <input type="radio" name="cir" v-model="choose" value="Circu" /> <span>Circumference</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    `
  });
  
  
  
  app.mount('#app');