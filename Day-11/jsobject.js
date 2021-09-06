const input = document.querySelector('input');
      const btn = document.querySelector('button');
      const para = document.querySelector('p');

      btn.onclick = function() {
        const code = input.value;
        para.textContent = eval(code);
      }

      function Person(first, last, age, gender, interests) {
        this.name = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
      };

      Person.prototype.bio = function() {
        let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        let pronoun;

        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          pronoun = 'He likes ';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          pronoun = 'She likes ';
        } else {
          pronoun = 'They like ';
        }

        string += pronoun;

        if(this.interests.length === 1) {
          string += this.interests[0] + '.';
        } else if(this.interests.length === 2) {
          string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
          for(let i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) {
              string += 'and ' + this.interests[i] + '.';
            } else {
              string += this.interests[i] + ', ';
            }
          }
        }
        alert(string);
      };

      Person.prototype.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };

      Person.prototype.farewell = function() {
        alert(this.name.first + ' has left the building. Bye for now!');
      }

      let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

      function Teacher(first, last, age, gender, interests, subject) {
        Person.call(this, first, last, age, gender, interests);

        this.subject = subject;
      }

      Teacher.prototype = Object.create(Person.prototype);
      Object.defineProperty(Teacher.prototype, 'constructor', { 
         value: Teacher, 
         enumerable: false, // so that it does not appear in 'for in' loop
         writable: true 
      });

      Teacher.prototype.greeting = function() {
        let prefix;

        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          prefix = 'Mr.';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          prefix = 'Mrs.';
        } else {
          prefix = 'Mx.';
        }

        alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
      };

      let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


      /*
      Write on console -
        teacher1.name.first;
        teacher1.interests[0];
        teacher1.bio();
        teacher1.subject;
        teacher1.greeting();
        teacher1.farewell();
      */
      function Student(first,last,age,gender,interests,subject){
          Person.call(this, first,last,age,gender,interests);
          this.subject=subject;
      }

      Student.prototype = Object.create(Person.prototype);
      Object.defineProperty(Student.prototype,'constructor',{
          value: Student,
          enumerable: false,
          writable: true
      });

      Student.prototype.greeting = function(){
          alert('Hi my name is '+this.name.first+' and I am a student of '+this.subject);
      };

      let student1 = new Student('mary','smith',20,'female',['music','art'],'computer');
