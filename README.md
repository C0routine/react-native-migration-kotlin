# react-native-migration-kotlin

React Native Java 를 Kotlin 으로 migration 하였습니다.

API 31 구동 확인.
kotlin version 1.6.10 사용

<br/>

**/android/build.gradle 추가**

```xml
buildscript{
    ext{
        ...
        kotlin_version = '1.6.10' // add
    }
}
dependencies{
    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version" // add
}
```

<br/>

**android/app/build.gradle 추가**

```xml
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-parcelize'

dependencies {
    implementation 'androidx.core:core-ktx:1.6.0' // add
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version" // add
}
```

<br/>
<br/>

**/android/app/src/main/java/com/projectName/MainApplication.java 추가**
```java
@Override
protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    ...
    packages.add(new FirstModulePackage()); // add
    return packages;
}
```

**/android/app/src/main/java/com/nativeModule/*.kt 파일 생성**
github 의 해당 위치로 이동하여 파일 생성
