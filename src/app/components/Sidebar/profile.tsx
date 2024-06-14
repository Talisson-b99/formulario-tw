import { LogOut } from 'lucide-react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/Talisson-b99.png"
        alt="foto de perfil do usuário"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col truncate">
        <p className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Talisson barbosa
        </p>
        <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          talissonbarbosa@email.com
        </p>
      </div>
      <button className="ml-auto cursor-pointer">
        <LogOut className="size-5 text-zinc-500 hover:text-violet-600 dark:text-zinc-400" />
      </button>
    </div>
  )
}

export default Profile
