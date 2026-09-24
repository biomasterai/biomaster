const tokens = window.BIOMASTER_TOKENS;
const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");
const feedback = document.getElementById("copy-feedback");
const renderColors = () => {
  const theme = root.dataset.theme;
  const names = {canvas:"Canvas / 背景",surface:"Surface / 工作面",selected:"Selected / 当前选择",text:"Text / 正文",muted:"Muted / 辅助",control:"Control / 控件",success:"Success / 成功",warning:"Warning / 需注意",danger:"Danger / 失败",info:"Info / 信息"};
  document.getElementById("semantic-swatches").replaceChildren(...Object.entries(names).map(([key,label]) => {
    const row = document.createElement("div");
    row.className = "semantic-color";
    const dot = document.createElement("i");
    dot.style.background = tokens.themes[theme][key];
    const copy = document.createElement("span");
    copy.textContent = label;
    const hex = document.createElement("code");
    hex.textContent = tokens.themes[theme][key];
    copy.append(hex);
    row.append(dot,copy);
    return row;
  }));
};
themeButton.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed",String(dark));
  themeButton.textContent = dark ? "Light mode ◑" : "Dark mode ◐";
  renderColors();
});
renderColors();
document.getElementById("spacing-scale").replaceChildren(...[4,8,12,16,24,32,48,64,96].map(size => {
  const item=document.createElement("span");
  item.className="space-sample";
  const bar=document.createElement("i");
  bar.style.width=size+"px";
  item.append(bar,String(size));
  return item;
}));
document.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    feedback.textContent = "已复制 " + button.dataset.copy;
  } catch {
    feedback.textContent = "色值：" + button.dataset.copy + "（可手动复制）";
  }
  window.setTimeout(() => {feedback.textContent="";},3000);
}));
const workspaceNames = {
  "tab-chat":["Dataset exploration","Chat project","Inspect the dataset"],
  "tab-notebook":["Metadata notebook","Notebook project","Explore sample metadata"],
  "tab-team":["Exploration team","Team project","Explore and report"]
};
document.querySelectorAll("[data-tabs]").forEach(group => {
  const tabs=[...group.querySelectorAll('[role="tab"]')];
  const activate = (index,focus=false) => {
    tabs.forEach((tab,position) => {
      const selected=position===index;
      tab.setAttribute("aria-selected",String(selected));
      tab.tabIndex=selected?0:-1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden=!selected;
      if(selected&&focus) tab.focus();
    });
    const names=workspaceNames[tabs[index].id];
    document.getElementById("project-name").textContent=names[0];
    document.getElementById("project-type").textContent=names[1];
    document.getElementById("sidebar-item").textContent=names[2];
    document.getElementById("app-breadcrumb").textContent=names[0]+" / "+names[2];
  };
  tabs.forEach((tab,index) => {
    tab.addEventListener("click",()=>activate(index));
    tab.addEventListener("keydown",event=>{
      const next=event.key==="ArrowRight"?(index+1)%tabs.length:event.key==="ArrowLeft"?(index-1+tabs.length)%tabs.length:event.key==="Home"?0:event.key==="End"?tabs.length-1:-1;
      if(next<0)return;
      event.preventDefault();
      activate(next,true);
    });
  });
});
document.getElementById("density-toggle").addEventListener("change",event=>{
  document.getElementById("app-preview").classList.toggle("compact",event.target.checked);
});
document.getElementById("run-toggle").addEventListener("click",event=>{
  const button=event.currentTarget;
  const paused=button.dataset.paused!=="true";
  button.dataset.paused=String(paused);
  button.textContent=paused?"Continue run →":"Pause run Ⅱ";
  const status=document.getElementById("run-status");
  status.textContent=paused?"Paused":"Running";
  status.className="bm-status "+(paused?"warning":"running");
  const tool=document.getElementById("tool-status");
  tool.textContent=paused?"Missing-values check paused":"Check missing values";
  tool.className=status.className;
  document.getElementById("progress-state").textContent=status.textContent;
  document.getElementById("run-detail").textContent=paused?"The current step is paused. Review the output before continuing.":"The summary will appear after this step finishes.";
  document.getElementById("run-feedback").textContent=paused?"Demo: run paused. No tools are executing.":"Demo: run resumed. This is a visual simulation.";
});
document.getElementById("context-toggle").addEventListener("click",event=>{
  const active=event.currentTarget.getAttribute("aria-pressed")!=="true";
  event.currentTarget.setAttribute("aria-pressed",String(active));
  event.currentTarget.textContent=active?"Hide context":"View context";
  document.getElementById("spec-notebook").classList.toggle("context-active",active);
  document.getElementById("context-feedback").textContent=active?"Context: cells 01 and 02. The prompt cell and future cells are excluded.":"Prompt context contains eligible cells above this one.";
});
const issues={
  summary:{id:"BM-003",title:"Write the findings",description:"The writer is waiting for the inspection result. No summary has been generated.",owner:"Writer",review:"Not started"},
  inspect:{id:"BM-002",title:"Inspect missing values",description:"The analyst is checking field completeness. Review has not started.",owner:"Analyst",review:"Pending"},
  read:{id:"BM-001",title:"Read sample metadata",description:"Metadata was read successfully. This execution result is not a scientific review.",owner:"Analyst",review:"Not reviewed"}
};
document.querySelectorAll("[data-issue]").forEach(button=>{
  button.setAttribute("aria-pressed",String(button.classList.contains("selected")));
  button.addEventListener("click",()=>{
    document.querySelectorAll("[data-issue]").forEach(other=>{
      other.classList.toggle("selected",other===button);
      other.setAttribute("aria-pressed",String(other===button));
    });
    const issue=issues[button.dataset.issue];
    document.getElementById("issue-id").textContent=issue.id+" / WORK RECORD";
    ["title","description","owner","review"].forEach(key=>{document.getElementById("issue-"+key).textContent=issue[key];});
  });
});
document.querySelectorAll("[data-demo]").forEach(button=>button.addEventListener("click",()=>{
  document.getElementById("component-feedback").textContent=button.dataset.demo;
}));
document.getElementById("project-form").addEventListener("submit",event=>{
  event.preventDefault();
  const input=document.getElementById("project-input");
  const error=document.getElementById("project-error");
  if(!input.value.trim()){
    input.setAttribute("aria-invalid","true");
    error.textContent="Enter a project name to continue.";
    input.focus();
    return;
  }
  input.setAttribute("aria-invalid","false");
  error.textContent="";
  document.getElementById("component-feedback").textContent="示例校验通过："+input.value.trim()+"。未创建真实项目。";
});

