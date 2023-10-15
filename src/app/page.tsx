/* eslint-disable @next/next/no-img-element */
import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { CardIcon } from '@/components/link-card-icon';
import { CardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { DiscordPartnerIcon } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import {
  FaBirthdayCake,
  FaDiscord,
  FaGithub,
  FaLocationArrow,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaUserGraduate,
  FaXbox,
  FaYoutube,
} from 'react-icons/fa';
import { TbBrandMinecraft } from 'react-icons/tb';
import { SiMisskey } from 'react-icons/si';
import MyAvatar from '../../public/icons/Karasu.png';
import { Card } from '@/components/ui/card';
import { ModalFooter } from '@nextui-org/react';
import { useState } from 'react';

export default function Page() {
  return (
    <main className='container space-y-6 py-6 lg:my-10'>
      <div>
        <FadeUpStagger>
          <div className='flex h-16 items-center justify-end'>
            <ThemeToggle />
          </div>
          <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
            <FadeUpDiv className='col-span-12 row-span-3 space-y-5 md:space-y-7 lg:col-span-4 lg:space-y-8'>
              <img
                className='pointer-events-none w-[150px] rounded-full shadow-xl lg:w-[200px]'
                src='./icons/Karasu.png'
                alt="Karasu's avatar"
              />
              <section>
                <h1 className='text-3xl font-black lg:text-4xl'>カラス</h1>
                <h2 className='text-lg text-muted-foreground lg:text-xl'>
                  {`( ᐛ👐)`}
                </h2>
              </section>
              <div className='grid gap-1'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <FaBirthdayCake />
                  <p>???</p>
                </div>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <FaLocationArrow />
                  <p>日本 / Japan</p>
                </div>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <FaUserGraduate />
                  <p>学生</p>
                </div>
              </div>
            </FadeUpDiv>
            <LinkCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-twitter md:col-span-3 lg:col-span-2'
              href='https://twitter.com/Columba_Karasu'
            >
              <CardIcon className='bg-twitter'>
                <FaTwitter size={25} />
              </CardIcon>
              <CardName name='Twitter' id='@Columba_Karasu' />
            </LinkCard>
            <LinkCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-discord md:col-span-3 lg:col-span-2'
              href='https://discord.gg/T3GPnmxXt6'
            >
              <CardIcon className='bg-discord'>
                <FaDiscord size={25} />
              </CardIcon>
              <CardName name='Discord' id='@kara_su' />
            </LinkCard>
            <FadeUpCard className='col-span-6 grid gap-3 p-6 transition-colors hover:border-xbox md:col-span-3 lg:col-span-2'>
              <CardIcon className='bg-xbox'>
                <FaXbox size={25} />
              </CardIcon>
              <CardName name='Xbox' id='Karasu256' />
            </FadeUpCard>
            <LinkCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-steam md:col-span-3 lg:col-span-2'
              href='https://steamcommunity.com/profiles/76561199134933953/'
            >
              <CardIcon className='bg-steam'>
                <FaSteam size={25} />
              </CardIcon>
              <CardName name='Steam' id='KPW-Karasu' />
            </LinkCard>
            <LinkCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-purple-500 md:col-span-3 lg:col-span-2'
              href='https://www.twitch.tv/hashibutogarasu/'
            >
              <CardIcon className='bg-purple-500'>
                <FaTwitch size={25} />
              </CardIcon>
              <CardName name='Twitch' id='hashibutogarasu' />
            </LinkCard>
            <LinkCard
              className='col-span-12 flex justify-between p-6 transition-colors hover:border-black dark:hover:border-gray-500 md:col-span-6 lg:col-span-4'
              href='https://github.com/Hashibutogarasu'
            >
              <div className='grid gap-3'>
                <CardIcon className='bg-github'>
                  <FaGithub size={25} />
                </CardIcon>
                <CardName name='GitHub' id='@Hashibutogarasu' />
              </div>
              <div className='grid grid-cols-4 gap-3'>
                <img width={32} height={32} src={`./programLangs/JavaScript.svg`} alt='javascript' />
                <img width={32} height={32} src={`./programLangs/TypeScript.svg`} alt='typescript' />
                <img width={32} height={32} style={{ backgroundColor: "white", borderRadius: "5px" }} src='./programLangs/java-icon.svg' alt='java' />
              </div>
            </LinkCard>
            <FadeUpCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-green-600 md:col-span-3 lg:col-span-2'>
              <CardIcon>
                <img width={32} height={32} src={`./icons/Minecraft_Launcher_MS_Icon.png`} alt='Minecraft Java Edition' />
              </CardIcon>
              <CardName name='Minecraft Java Edition' id='kara_su' />
            </FadeUpCard>
            <LinkCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-green-500 md:col-span-3 lg:col-span-2' href='https://misskey.io/@_Karasu'>
              <CardIcon className='bg-green-500'>
                <SiMisskey size={25} />
              </CardIcon>
              <CardName name='misskey.io' id='@_Karasu' />
            </LinkCard>
            <FadeUpCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-white md:col-span-3 lg:col-span-2'>
              <CardIcon>
                <img width={32} height={32} src={`./icons/genshin_impact.png`} alt='Genshin Impact' />
              </CardIcon>
              <CardName name='Genshin Impact' id='806193489 Rank:59' />
            </FadeUpCard>
            <FadeUpCard
              className='col-span-6 grid gap-3 p-6 transition-colors hover:border-white md:col-span-3 lg:col-span-2'>
              <CardIcon>
                <img width={32} height={32} src={`./icons/starrail.png`} alt='Honkai Starrail' />
              </CardIcon>
              <CardName name='Honkai Starrail' id='800498009 Rank:68' />
            </FadeUpCard>
          </div>
        </FadeUpStagger>
      </div>
      <footer className='text-center'>
        <p>{`Copyright (c) 2023 Hashibutogarasu`}</p>
        <p>Powered by Next.js</p>
      </footer>
    </main>
  );
}
