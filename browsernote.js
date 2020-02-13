class BrowserNote extends Window {
    static create(id) {
        let bn_ = Window.create(id)
        bn_.element.classList.add("browsernote")
        bn_.setContents("<textarea></textarea><div class='saveArea'><input type='button' class='saveBtn' value='Save'></div>")
        let bn = new BrowserNote
        bn.element = bn_.element
        bn.id = bn_.id
        bn.title = bn_.title
        bn.flag = bn_.flag
        bn.element.getElementsByClassName("saveBtn")[0].onclick = function(e){
            bn.save()
        }
        if(Cookie.get(`text_${bn.id}`)){
            bn.element.getElementsByTagName("textarea")[0].value = unescape(Cookie.get(`text_${bn.id}`))
        }
        return bn
    }

    save() {
        Cookie.delete(`text_${this.id}`)
        Cookie.set(`text_${this.id}`, `${escape(this.element.getElementsByTagName("textarea")[0].value)}`)
    }
}