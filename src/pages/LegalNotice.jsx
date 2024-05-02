const LegalNotice = () => {
    document.title = "ITGALL legal notice"
    return (
        <div className="p-8 lg:p-20 w-full min-h-[calc(100svh-13rem)]">
            <h2 className="font-bold text-2xl">
                Industrial and intellectual property
            </h2>
            <p>
                All content, text, photographs, graphics, images, icons,
                technology, software, links and other audiovisual and/or sound
                content, as well as its graphic design and source codes, are the
                intellectual property of the owner of the website or third
                parties. without it being understood that any exploitation right
                recognized by current legislation has been transferred to the
                user.
            </p>

            <p>
                The trademarks, trade names and distinctive signs are the
                property of ITGALL or third parties, without it being understood
                that access to the web page of which this legal notice is the
                subject attributes any right over them.
            </p>

            <p className="mb-8">
                Those users who make comments on the blog or social networks
                assign their intellectual property rights free of charge, and
                are subject to the conditions expressed in the "content provided
                by users" section.
            </p>

            <h2 className="font-bold text-2xl">Responsibilities</h2>
            <p className="mb-8">
                The owner of the website will not be responsible, in any case,
                for damages of any kind derived, directly or indirectly, from
                the failure to read this notice, or from the breach of the
                obligations specified in the conditions. Likewise, the owner of
                the web page excludes any responsibility for damages of any
                nature that, outside its effective control, may be due to the
                transcription, dissemination, storage, availability, reception,
                obtaining or access to the web page. or its contents.
            </p>

            <h2 className="font-bold text-2xl">Regulations and Jurisdiction</h2>
            <p className="mb-8">
                These Conditions of Use of the Website are governed in each and
                every one of its extremes by Spanish law. This legal notice will
                not be filed individually for each user but will remain
                accessible through the Internet on this same website.
            </p>
        </div>
    )
}

export default LegalNotice
