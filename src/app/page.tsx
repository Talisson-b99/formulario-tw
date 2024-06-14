import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import SettingsTabs from './components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from './components/input'
import * as FileInput from '@/app/components/Form/FileInput'
import SelectInput from './components/Form/FileInput/Select/index.'
import SelectItem from './components/Form/FileInput/Select/select-item'
import TextArea from './components/Form/FileInput/textarea'
import Button from './components/button'
import ToggleTheme from './components/toggleTheme'

export default function Home() {
  const countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'China', code: 'CN' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Egypt', code: 'EG' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Greece', code: 'GR' },
    { name: 'Hungary', code: 'HU' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Japan', code: 'JP' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Norway', code: 'NO' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Vietnam', code: 'VN' },
  ]
  return (
    <div className="mt-12 lg:mt-0">
      <div className="absolute right-12 top-6 z-40">
        <ToggleTheme />
      </div>
      <h1 className="text-2xl font-medium text-zinc-900 lg:text-3xl dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div>
              <div className="flex flex-col gap-6 lg:flex-row">
                <InputRoot>
                  <InputControl id="firstName" defaultValue="Talisson" />
                </InputRoot>
                <InputRoot>
                  <InputControl defaultValue="Barbosa" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <div>
              <InputRoot>
                <InputPrefix>
                  <Mail className="size-5 text-zinc-500" />
                </InputPrefix>
                <InputControl id="email" defaultValue="Talisson@email.com" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <div>
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your photo
                <span className="mt-0.5 block text-zinc-500">
                  This will be displayed on your profile.
                </span>
              </label>
            </div>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Controll />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <div>
              <InputRoot>
                <InputPrefix>
                  <Mail className="size-5 text-zinc-500" />
                </InputPrefix>
                <InputControl id="role" defaultValue="Product designer" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <SelectInput placeholder="Select a country...">
              {countries.map((country) => (
                <SelectItem
                  key={country.code}
                  text={country.name}
                  value={country.code.toLowerCase()}
                />
              ))}
            </SelectInput>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <SelectInput placeholder="Select a timezone...">
              <SelectItem text="America UTC−03:00" value="pacific" />
            </SelectInput>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-medium text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-4">
              <div className="flex grid-cols-2 flex-col gap-2 lg:grid">
                <SelectInput placeholder="Normal text" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                </SelectInput>

                <div className="flex items-center gap-3">
                  <button type="button" className="cursor-pointer">
                    <Bold
                      className="size-5 text-zinc-500 hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>

                  <button type="button" className="cursor-pointer">
                    <Italic
                      className="size- text-zinc-500 hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>

                  <button type="button" className="cursor-pointer">
                    <Link
                      className="size-5 text-zinc-500 hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>

                  <button type="button" className="cursor-pointer">
                    <List
                      className="size-5 text-zinc-500 hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>

                  <button type="button" className="cursor-pointer">
                    <ListOrdered
                      className="size-5 text-zinc-500 hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue={
                  'Im a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.'
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-medium text-zinc-500">
                Share a few snippets of yout work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Controll multiple />
            </FileInput.Root>
          </div>
          <div>
            <div className="flex items-center justify-end gap-3 pt-5">
              <Button variant="secondary" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" form="settings">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
