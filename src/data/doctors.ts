export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  fullName: string;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Ana Flavia',
    specialties: ['Psiquiatria', 'Psicologia'],
    fullName: 'Dra. Ana Flavia'
  },
  {
    id: '2',
    name: 'Juliana Salomão',
    specialties: ['Neurologia', 'Geriatria'],
    fullName: 'Dra. Juliana Salomão'
  },
  {
    id: '3',
    name: 'Vivian Balan',
    specialties: ['Cardiologia', 'Clínica Geral'],
    fullName: 'Dra. Vivian Balan'
  },
  {
    id: '4',
    name: 'Giorgia Gianini',
    specialties: ['Pneumologia', 'Infectologia'],
    fullName: 'Dra. Giorgia Gianini'
  },
  {
    id: '5',
    name: 'Fernando Goncalves',
    specialties: ['Endocrinologia', 'Nutrologia'],
    fullName: 'Dr. Fernando Goncalves'
  },
  {
    id: '6',
    name: 'Leonardo Miranda',
    specialties: ['Ortopedia', 'Reumatologia'],
    fullName: 'Dr. Leonardo Miranda'
  },
  {
    id: '7',
    name: 'Bruno Belo',
    specialties: ['Dermatologia', 'Alergologia'],
    fullName: 'Dr. Bruno Belo'
  },
  {
    id: '8',
    name: 'Yudi Kawakami',
    specialties: ['Ginecologia', 'Urologia'],
    fullName: 'Dr. Yudi Kawakami'
  }
];

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};

export const getRandomDoctor = (): Doctor => {
  return doctors[Math.floor(Math.random() * doctors.length)];
};
