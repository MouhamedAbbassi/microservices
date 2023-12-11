package com.example.resource.Service;

 import com.example.resource.Entities.Resource;

import java.util.List;

public interface ResourceService {
    Resource addResource(Resource resource  );

    Resource updateBloc(long id, Resource resource);

    List<Resource> findAllResource();

    Resource findResourceById(Long id);



    void deleteResourceById(long id);





}
