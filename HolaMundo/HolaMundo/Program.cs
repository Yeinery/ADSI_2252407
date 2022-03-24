using System;

namespace HolaMundo
{
    class Program
    {
        //Variables globales
        public static int resultado = 0;
        public static int Numero1 = 0;
        public static int Numero2 = 0;

        public static void Main()
        {
            //Variable para el tipo de operación
            int tipoOperacion = 0;

            Console.WriteLine("Calculadora");
            Console.WriteLine("1. Suma");
            Console.WriteLine("2. Resta");
            Console.WriteLine("3. Multiplicación");
            Console.WriteLine("4. División");
            Console.WriteLine("Ingrese el número de la operación: ");
            tipoOperacion = Convert.ToInt32(Console.ReadLine());

            //Solicito los número al usuario
            Console.WriteLine("Por facor ingrese el primer valor: ");
            Numero1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Por facor ingrese el segundo valor: ");
            Numero2 = Convert.ToInt32(Console.ReadLine());

            switch (tipoOperacion)
            {
                case 1:
                    {
                        Console.WriteLine("Operación seleccionada: SUMA");
                        suma();
                        break;
                    }
                case 2:
                    {
                        Console.WriteLine("Operación seleccionada: RESTA");
                        break;
                    }
                case 3:
                    {
                        Console.WriteLine("Operación seleccionada: MULTIPLICACIÓN");
                        break;
                    }
                case 4:
                    {
                        Console.WriteLine("Operación seleccionada: DIVISIÓN");
                        break;
                    }
                default:
                    {
                        Console.WriteLine("Seleccione una opción válida");
                        break;
                    }
            }
            Console.ReadLine();

        }

        static void suma()
        {

            resultado = Numero1 + Numero2;
            Console.WriteLine("El resultado de la suma es: " + resultado);
        }
    }
}

