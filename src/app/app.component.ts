import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myFirstForm : FormGroup;
  
  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.createMyFirstForm();
  }
  
  createMyFirstForm(){
    this.myFirstForm = this.fb.group({
      OrgId: [1223567],
      DataProviderType: ['Remit'],
      DataProviderMode:['StoredProcedure'],
      DataSourceId:[1],
      WriterSetting:this.fb.group({
        RelativeFolderPath:['Default'],
        File:this.fb.array([
          this.fb.group({
            FileNamePattern:['werds']
          })
        ])
      }),
      ProcessorSettings:this.fb.group({
        FileType:['CSVDelimited'],
        Delimiter:['Tab'],
        IncludeHeaders:[false],
        Fields:this.fb.array([
          this.fb.group({
            Width:[54],
            TargetName:['orgId'],
            FieldType:['Static'],
            SourceName:['123'],
            Rules:this.fb.array([
              this.fb.group({
                Type:['Replace'],
                Find:['dvsdv'],
                Replace:['rfds'],
                 Prefix:['dvsdv']
              }),
              // this.fb.group({
              //   Type:['Prefix'],
              //   Find:['dvsdv'],
              //   Replace:['rfds'],
              //   Prefix:['dvsdv']
              // })
            ])

          }),
          this.fb.group({
            Width:[15],
            TargetName:['AccountNumber'],
            FieldType:['Static'],
            SourceName:['account'],
            Rules:this.fb.array([
              this.fb.group({
                Type:['Prefix'],
                Find:['dvsdv'],
                Replace:['dvsdv'],
                Prefix:['Wd']
              })
            ])
          })
        ])
      }),
      Name:['Bindu'],
      ProcessType:['InBound'],
      IsEnabled:[false],
      SkipFilter:[false],
      SkipProcessor:[false],
      SkipWriter:[false],
      SkipEncryption:[false],
      SkipDelivery:[false],
      Schedule:['string']
    })
  }

addFilePattern(patternArrayInstance: FormArray, index: number){
  const group =  this.fb.group({
          FileNamePattern:['']
  })
  patternArrayInstance.insert(index, group );
}
removeFilePattern(patternArrayInstance: FormArray, index: number){
  patternArrayInstance.removeAt(index);
}

addFields(fieldsArrayInstance: FormArray, index: number){
  const fgroup = this.fb.group({
    Width:[],
    TargetName:[''],
    FieldType:[''],
    SourceName:[''],
    Rules:this.fb.array([this.addRules])
  })
  fieldsArrayInstance.insert(index,fgroup);
  
}
deleteFields(fieldsArrayInstance: FormArray, index: number){
  fieldsArrayInstance.removeAt(index);
}

addRules(rulesArrayInstance: FormArray, index: number){
  const rgroup = new FormGroup({
    Type:new FormControl(''),
    Find:new FormControl(''),
    Replace: new FormControl(''),
    Prefix:new FormControl('')
  })
  rulesArrayInstance.insert(index,rgroup);
}
deleteRules(rulesArrayInstance: FormArray, index: number){
  rulesArrayInstance.removeAt(index);
}


}
