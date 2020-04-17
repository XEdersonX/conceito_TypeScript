/**
 * Para Criar: name, email, password
 */
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; //? pq o nome é opcional
  email: string;
  password: string;
  //techs: Array<string>;
  //techs: string[]; //array de strings
  techs: Array<string | TechObject>; //Quando o array é misto.  | - ou
}

export default function createUser({ name, email, password}: CreateUserData) {  // data: CreateUserData
  const user = {
    name,
    email,
    password,
  };

  return user;
}