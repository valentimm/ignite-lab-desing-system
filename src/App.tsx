import { Envelope, Lock } from "phosphor-react";
import { Heading } from "./components/Heading";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className="flex flex-col gap-3">
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input id='email' type='email' placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className="flex flex-col gap-3">
          <Text className='font-semibold mt-1'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className="flex items-center gap-2">
          <Checkbox>
          </Checkbox>
          <Text size='sm' className='text-regular text-gray-100 opacity-50'>Lembrar de mim por 30 dias</Text>
        </label>
        <label htmlFor='submit' className="flex flex-col gap-3">
        <Button >Entrar</Button>
        </label>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        <a href='#' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
        <a href='#' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
