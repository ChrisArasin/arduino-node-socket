int switchState = 0;
int prevSwitchState = 0;


void setup() {
  Serial.begin(9600);
  
  pinMode(4, OUTPUT);
  pinMode(2, INPUT);  
}

void loop() {
  
// Example: Read from Serial
  if (Serial.available() > 0) {
   char input = Serial.read();  // read first available byte into a variable
   if (input == 'H') {          // if the variable equals H, or ASCII 72
    digitalWrite(4, HIGH);     // turn on the LED
   }
   if (input == 'L') {          // if the variable equals L, or ASCII 76
    digitalWrite(4, LOW);      // turn off the LED
   }
 }

// Example: Write to Serial
// 

//  prevSwitchState = switchState;
//  switchState = digitalRead(2);
//
//  if (switchState == HIGH && prevSwitchState == LOW ) {
////    Serial.println(1);
//    Serial.write(1);
//    digitalWrite(4, HIGH);
//  }
//   else if (switchState == LOW && prevSwitchState == HIGH) {
////    Serial.println(0);
////    Serial.write(0);
//    digitalWrite(4, LOW);
//  } else {
////    digitalWrite(4, LOW);
//  }
//  

  delay(10);

}
