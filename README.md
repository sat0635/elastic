# elastic
월드 스마트시티 엑스포(WSCE 2019) 메이커톤 우수상작품, 스마트 플라스틱 분쇄기의 서버입니다.


<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65400161-aa960900-ddfb-11e9-9caf-d5399d5b8241.jpg">
<hr/>

<h3>views.py in backend(Django)</h3>

~~~
//플라스틱 수거함의 스크랩을 비웠을때 받는 API
def clean(request, id):
        queryset = Place.objects.get(ID=id)
        queryset.CONTENT_DEPTH=0
        queryset.save()

~~~

~~~
//현재 플라스틱 수거함에 스크랩이 어느 정도 차있는지 값을 받는 API
def increase_depth(request,id, depth):
        queryset = Place.objects.get(ID=id)
        queryset.CONTENT_DEPTH=depth
        queryset.save()


~~~

~~~
//모든 플라스틱 분쇄기를 지도에 표시하기 위해 React 서버 폴더에 파일 생성
def makefile(request):
        queryset = Place.objects.all()
        data_list=[]
        for row in queryset:
                for i in range(0,row.CONTENT_DEPTH):
                        data_dict={}
                        data_dict["lat"]=float(row.GPSX)
                        data_dict["lng"]=float(row.GPSY)
                        data_list.append(data_dict)
        f=open("/opt/elastic/frontend/src/data/generated-data.json","w")
        result=json.dumps(data_list)
        f.write(result)
        f.close()
        return HttpResponse(result)

~~~
<hr/>
<h3>Hexbin.js in frontend(React)</h3>

~~~
//Hexagon.js(지도에 마크를 찍는 역할을 함)에게 해당 분쇄기 정보를 넘겨준다
//hexagon.length == 수거함 내용물 높이
//colorScale(hexagon.length) == 수거함 내용물 높이에 따른 색깔 지정
<Hexagon
  hexPixelRadius={this.props.hexPixelRadius}
  fillColor={colorScale(hexagon.length)}
  content={hexagon.length}
/>

~~~

<hr/>
<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65400051-09a74e00-ddfb-11e9-86e6-25d7627b9e48.JPG">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65400048-0613c700-ddfb-11e9-9cdd-a565855a8e0a.PNG">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65400156-a964dc00-ddfb-11e9-83ee-ea827d9cbd6e.jpg">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65400164-aec22680-ddfb-11e9-9801-ca0f2ab1e1ed.jpg">
