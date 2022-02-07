<div className='messages_toolbar'>
    <div>
        <UnstyledInput myEvent={f}></UnstyledInput>
    </div>

    {/* <input type="text" placeholder="your text" onChange={e => setInput({ text: e.target.value, author: "human" })} /> */}
    <div>
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleBtn}>Send</Button>
    </div>
</div>