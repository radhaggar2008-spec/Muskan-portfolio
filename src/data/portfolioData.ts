export interface LabVideoItem {
  id: string;
  label: string;
  caption: string;
  videoSrc: string;
  thumbSrc: string;
  duration: string;
  orientation: 'landscape' | 'portrait';
  observation: string;
}

export interface CourseModule {
  id: string;
  number: string;
  title: string;
  category: 'Sensors & Analog' | 'App & IoT';
  categoryLabel: string;
  summary: string;
  highlights: string[];
  mediaType: 'video' | 'image';
  videoSrc?: string;
  thumbSrc: string;
  secondaryImages: { src: string; caption: string }[];
}

export const LED_EXPERIMENT_CONTENT = {
  sectionTitle: 'ENGINEERING EXPLORATION – LABORATORY ACTIVITIES',
  sectionIntro:
    'Throughout my Engineering Exploration course, I participated in hands-on laboratory activities involving Arduino programming, electronic components, circuit connections and hardware demonstrations. These activities helped me understand how programming instructions translate into real-world electronic outputs.',
  experimentTitle: 'EXPERIMENT 01: ARDUINO-BASED LED INTERFACING AND BLINKING PATTERNS',
  category: 'Arduino · Basic Electronics · Programming',
  objective:
    'To understand how multiple LEDs can be connected to an Arduino UNO and controlled through programmed digital output signals.',
  componentsUsed: [
    { name: 'Arduino UNO', detail: 'Microcontroller board executing digital output instructions' },
    { name: 'Four LEDs', detail: 'Red, yellow, and green light-emitting diodes as visual outputs' },
    { name: 'Breadboard', detail: 'Solderless prototyping board for modular circuit connections' },
    { name: 'Connecting wires', detail: 'Male-to-male jumper wires linking digital pins and common ground' },
    { name: 'USB connection', detail: 'Provides both sketch upload communication and 5V power supply' },
  ],
  workingPrinciple: [
    'The LEDs are connected to the Arduino board through digital pins. The Arduino executes the uploaded program and controls when individual LEDs turn ON and OFF.',
    'Different blinking sequences are created using digital output instructions and timing delays.',
  ],
  patternsDemonstrated: [
    {
      name: 'Sequential LED Blinking',
      description: 'LEDs illuminate one after another.',
    },
    {
      name: 'Alternating LED Blinking',
      description: 'Different LED pairs illuminate alternately.',
    },
    {
      name: 'Multiple LED Patterns',
      description: 'Different combinations of LEDs are controlled through programmed instructions.',
    },
    {
      name: 'Timing-Based LED Control',
      description: 'Delay intervals control how long the LEDs remain ON or OFF.',
    },
  ],
  codeDemoNote:
    'One of the recorded code demonstrations uses four LED pins (8, 9, 10 and 11), alternating LED pairs and a 500-millisecond delay.',
  scopeNote:
    'The five recordings below present different recorded demonstrations of the LED-interfacing activity rather than each clip demonstrating every pattern.',
  whatILearned: [
    'How to interface LEDs with an Arduino UNO.',
    'How digital output pins control electronic components.',
    'How timing and delay functions influence LED behavior.',
    'How programming logic creates different output sequences.',
    'Basic circuit connections and hardware testing.',
  ],
  keyTakeaway:
    'This activity strengthened my understanding of Arduino-based hardware interfacing and demonstrated how basic programming concepts can be applied to control physical electronic components.',
};

export const LED_DEMONSTRATIONS: LabVideoItem[] = [
  {
    id: 'demo-01',
    label: 'Demonstration 01',
    caption:
      'Recorded demonstration of Arduino LED blinking and sequencing patterns with four breadboard LEDs wired to digital pins 8, 9, 10, and 11 using a 500 ms loop delay.',
    videoSrc: '/assets/muted/demo_01_muted.mp4',
    thumbSrc: '/assets/thumbs/demo_01_thumb.jpg',
    duration: '0:10',
    orientation: 'portrait',
    observation: 'Breadboard 4-LED circuit + Arduino IDE sketch_sep11a.ino',
  },
  {
    id: 'demo-02',
    label: 'Demonstration 02',
    caption:
      'Recorded demonstration of Arduino LED blinking and sequencing patterns highlighting the breadboard connections, Arduino UNO board, and uploaded sketch.',
    videoSrc: '/assets/muted/demo_02_muted.mp4',
    thumbSrc: '/assets/thumbs/demo_02_thumb.jpg',
    duration: '0:13',
    orientation: 'portrait',
    observation: '4-LED breadboard sequence + pin 8–11 setup',
  },
  {
    id: 'demo-03',
    label: 'Demonstration 03',
    caption:
      'Recorded demonstration of Arduino LED blinking and sequencing patterns showing coordinated multi-LED illumination and hardware wiring verification.',
    videoSrc: '/assets/muted/demo_03_muted.mp4',
    thumbSrc: '/assets/thumbs/demo_03_thumb.jpg',
    duration: '0:13',
    orientation: 'portrait',
    observation: 'Active LED pattern cycling + Arduino UNO power & code view',
  },
  {
    id: 'demo-04',
    label: 'Demonstration 04',
    caption:
      'Recorded demonstration of Arduino LED blinking and sequencing patterns illustrating alternating LED pairs and timing-based transitions on the breadboard.',
    videoSrc: '/assets/muted/demo_04_muted.mp4',
    thumbSrc: '/assets/thumbs/demo_04_thumb.jpg',
    duration: '0:15',
    orientation: 'portrait',
    observation: 'Alternating LED pair switching + delay timing inspection',
  },
  {
    id: 'demo-05',
    label: 'Demonstration 05',
    caption:
      'Recorded demonstration of Arduino LED blinking and sequencing patterns capturing live LED transitions alongside the Arduino IDE workspace.',
    videoSrc: '/assets/muted/demo_05_muted.mp4',
    thumbSrc: '/assets/thumbs/demo_05_thumb.jpg',
    duration: '0:06',
    orientation: 'portrait',
    observation: 'Compact 4-LED breadboard test & USB-powered UNO run',
  },
];

export const ADDITIONAL_MODULES: CourseModule[] = [
  {
    id: 'potentiometer',
    number: '02',
    title: 'Analog Input & Potentiometer Interfacing',
    category: 'Sensors & Analog',
    categoryLabel: 'Analog Electronics · Arduino UNO · Serial Monitor',
    summary:
      'Read variable analog voltages (0–1023) from a rotary potentiometer connected to analog pin A0 and mapped values to PWM LED brightness and Serial Monitor output.',
    highlights: [
      'Wired 5V, GND, and wiper terminal to Analog In A0',
      'Used analogRead() and Serial.begin(9600) for real-time telemetry',
      'Mapped 10-bit ADC readings (0–1023) to 8-bit PWM output (0–255)',
    ],
    mediaType: 'video',
    videoSrc: '/assets/muted/exp_potentiometer_muted.mp4',
    thumbSrc: '/assets/thumbs/exp_potentiometer_thumb.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_10.18.44_AM_7bd867c0.jpeg',
        caption: 'Close-up of Power (5V, GND) and Analog In (A0) header wiring on Arduino UNO',
      },
    ],
  },
  {
    id: 'ultrasonic',
    number: '03',
    title: 'Ultrasonic Distance Measurement & Radar Sweep',
    category: 'Sensors & Analog',
    categoryLabel: 'HC-SR04 Sensor · Servo Motor · Processing Radar',
    summary:
      'Measured obstacle distance in centimeters using pulseIn() echo timing, triggered proximity alert LEDs under a 10 cm / 20 cm threshold, and plotted a live 180° servo radar sweep.',
    highlights: [
      'Triggered 10 µs ultrasonic pulses on trig pin and captured echo duration',
      'Computed distance via (0.0343 * duration) / 2 in centimeters',
      'Visualized real-time angular distance sweeps on a Processing radar display',
    ],
    mediaType: 'video',
    videoSrc: '/assets/muted/exp_ultrasonic_radar_muted.mp4',
    thumbSrc: '/assets/thumbs/exp_ultrasonic_radar_thumb.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_9.30.34_PM_f09e0739.jpeg',
        caption: 'HC-SR04 Ultrasonic sensor mounted at workbench with live Serial Monitor readings',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_6.27.06_PM_4b073103.jpeg',
        caption: 'sketch_sep18a.ino ultrasonic distance calculation and Serial output',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_9.29.58_PM_14c9c5ad.jpeg',
        caption: 'sketch_oct7a.ino proximity threshold control for Pin 13 LED',
      },
    ],
  },
  {
    id: 'iot-bluetooth',
    number: '04',
    title: 'MIT App Inventor, Bluetooth & ThingSpeak IoT Control',
    category: 'App & IoT',
    categoryLabel: 'Mobile App Blocks · HC-05 Bluetooth · Cloud Telemetry',
    summary:
      'Built custom Android apps in MIT App Inventor—starting from a basic arithmetic calculator to a Bluetooth controller that switches Arduino LEDs and logs state changes to ThingSpeak.',
    highlights: [
      'Designed block-based mobile interfaces in MIT App Inventor',
      'Transmitted serial commands ("1" / "0") over Bluetooth to Arduino UNO',
      'Logged LED status transitions live onto a ThingSpeak Channel chart',
    ],
    mediaType: 'video',
    videoSrc: '/assets/muted/exp_iot_thingspeak_muted.mp4',
    thumbSrc: '/assets/thumbs/exp_iot_thingspeak_thumb.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_6.30.17_PM_affdbaa4.jpeg',
        caption: 'Bluetooth Control App UI (Search BT Devices, LED ON, LED OFF)',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_6.25.57_PM_ae2fb52f.jpeg',
        caption: 'MIT App Inventor blocks combining BluetoothClient1 and ThingSpeak Web API',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_6.26.46_PM_5e775dce.jpeg',
        caption: 'MIT App Inventor Calculator Screen1 interface layout',
      },
    ],
  },
];

export const FINAL_PROJECT = {
  title: 'Arduino-UNO Based Smart Rain-Sensing & Garden Protection Model',
  subtitle: 'Culminating Working Model Project',
  description:
    'Bringing together sensor interfacing, digital outputs, threshold logic, and physical prototyping learned across the semester, our team built a working Arduino-UNO environmental model featuring a roof-mounted MH-RD raindrop detection module, audible buzzer alert, breadboard LED indicators, and automated threshold control.',
  components: [
    'Arduino UNO Microcontroller',
    'MH-RD Raindrop Sensor Module',
    'Soil Moisture & Relay Control Logic',
    'Piezo Buzzer & Status LEDs',
    'Breadboard & External Battery Supply',
  ],
  teamPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_9.28.51_PM_4a3123f1.jpeg',
  modelPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_9.29.14_PM_1c52ab5a.jpeg',
  codePhoto: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_6.14.41_PM_8fa6afe5.jpeg',
};
