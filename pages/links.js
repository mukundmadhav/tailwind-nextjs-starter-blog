import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Projects() {
    console.log('siteMetadata.links', siteMetadata.links)
    return (
        <>
            <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Links
                    </h1>
                </div>


                <div className="text-center">

                    {
                        siteMetadata.links.map((el) => {
                            return <><button onClick={()=>window.open(el[1], '_blank')} className="p-2 w-4/5 m-3 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">{el[0]}</button> <br /> </>
                        })
                    }

                </div>
            </div>
        </>
    )
}
